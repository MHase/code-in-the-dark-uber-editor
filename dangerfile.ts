import { message, danger, schedule } from 'danger';
import yarn from 'danger-plugin-yarn';
import jest from 'danger-plugin-jest';

schedule(yarn());
jest();

const modifiedMD = danger.git.modified_files.join('- ');
message('Changed Files in this PR: \n - ' + modifiedMD);
