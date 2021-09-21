import { rndString } from '@laufire/utils/random';

const rndStringLength = 16;
const getRndString = () => rndString(rndStringLength);

export { getRndString };
