import { helper } from '@ember/component/helper';

export function ifCond(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
}

export default helper(ifCond);
