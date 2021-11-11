import * as path from 'path';
import moduleAlias from 'module-alias';

// Pego o meu diretorio atual, volto 2 pastas e importo todos os arquivos
const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
