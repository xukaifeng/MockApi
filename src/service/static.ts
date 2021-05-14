import { Provide } from '@midwayjs/decorator';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { jsonParse } from '../util/json';

@Provide()
export class StaticService {
  async getStaticData(filePath: string) {
    try {
      const content = readFileSync(
        resolve(__dirname, `../staticData/${filePath}.json`)
      );
      return jsonParse(content.toString());
    } catch (e) {
      return null;
    }
  }
}
