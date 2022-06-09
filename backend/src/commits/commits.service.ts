
import { Injectable } from '@nestjs/common';
import axios from 'axios';

import config from '../config';

@Injectable()
export class CommitsService {
  private readonly commits: any[] = [];

  async findAll(): Promise<any> {

    try {

        const res = await axios.get('https://api.github.com/repos/CharlesPs/fulltimeforce-technical-test/commits', { headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${config.ghToken}`,
        }})

        return res.data;
    } catch (error) {

        throw error
    }

    // return this.commits;
  }
}