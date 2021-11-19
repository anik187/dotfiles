-- defaults --
require('opts')
require('mappings')
require('plugins')

-- themes--
-- require('themes.onedark')
-- require('themes.neon')
-- require('themes.calvera')
require('themes.tokyonight')
require('anik.colorizer-setup')
-- statusline
-- require('anik.statusline-setup')
require('anik.windline-setup')
require('anik.bufferline-setup')
require('anik.indent_blankline-setup')
require('anik.nvimcomment-setup')
require('anik.dashboard-setup')
require('anik.nvimtree-setup')
-- require('anik.floatterm-setup')
-- lsp --
require('anik.lspconfig-setup')
require('anik.treesitter-setup')
require('anik.compe-setup')
require('anik.telescope-setup')
require('anik.whichkey-setup')
vim.cmd('source ~/.config/nvim/vim/floatterm.vim')
vim.cmd('colo tokyonight')