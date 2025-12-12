/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';

@Injectable()
export class ProxifyService {
  private proxies: string[] = [];

  constructor() {
    void axios(
      'https://api.proxyscrape.com/v2/account/datacenter_shared/proxy-list?auth=1r7dzu84jfdjmzrmbk9g&type=getproxies&country[]=all&protocol=http&format=json&status=online',
    )
      .then((a: AxiosResponse<{ data: string[][] }>) => a.data.data)
      .then((data) => {
        this.proxies = data.map((p) => p[0]); // izvlači “IP:PORT”
      });
  }

  private getRandomProxy() {
    const rand = Math.floor(Math.random() * this.proxies.length);
    return this.proxies[rand];
  }

  async fetchThroughProxy(url: string) {
    const proxy = this.getRandomProxy();

    const agent = new HttpsProxyAgent(`http://${proxy}`);

    try {
      const response = await axios.get(url, {
        httpAgent: agent,
        httpsAgent: agent,
        timeout: 15000,
      });

      return response.data;
    } catch (e) {
      return {
        proxy,
        error: true,
        message: e.message,
      };
    }
  }
}
