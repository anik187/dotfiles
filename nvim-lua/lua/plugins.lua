local fn = vim.fn
local install_path = fn.stdpath('data')..'/site/pack/packer/start/packer.nvim'
if fn.empty(fn.glob(install_path)) > 0 then
  fn.system({'git', 'clone', '--depth', '1', 'https://github.com/wbthomason/packer.nvim', install_path})
  vim.cmd 'packadd packer.nvim'
end
return require('packer').startup(function()
  -- Packer can manage itself
  use 'wbthomason/packer.nvim'
  -- icons secton
  use 'ryanoasis/vim-devicons'
  use 'kyazdani42/nvim-web-devicons'
  -- statusline section
  use 'windwp/windline.nvim'
  use {
    'hoob3rt/lualine.nvim',
    requires = {'kyazdani42/nvim-web-devicons', opt = true}
  }
  use {'akinsho/bufferline.nvim', requires = 'kyazdani42/nvim-web-devicons'}
  use "lukas-reineke/indent-blankline.nvim"
  -- theme section
  use {'dracula/vim', as = 'dracula'}
  use 'navarasu/onedark.nvim'
  use "rafamadriz/neon"
  use 'yashguptaz/calvera-dark.nvim'
  use 'folke/tokyonight.nvim'
  use 'romgrk/doom-one.vim'
  use 'windwp/nvim-ts-autotag'
  use 'p00f/nvim-ts-rainbow'
  use 'norcalli/nvim-colorizer.lua'
  -- file explorer
  use {
      'kyazdani42/nvim-tree.lua',
      requires = 'kyazdani42/nvim-web-devicons'
  }

  --lsp config
  use 'neovim/nvim-lspconfig'
  use 'hrsh7th/nvim-compe'
  use { 'nvim-treesitter/nvim-treesitter', run = ':TSUpdate' }
  use 'voldikss/vim-floaterm'
  use 'folke/which-key.nvim'
  use "terrortylor/nvim-comment"
  use 'glepnir/dashboard-nvim'
  use 'junegunn/fzf.vim'
  use 'airblade/vim-rooter'
end)
