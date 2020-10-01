set cursorline
set number
set relativenumber
set noerrorbells
set visualbell
set noswapfile
set nobackup
set shiftwidth=4
set tabstop=4 softtabstop=4 
set expandtab
set autoindent
set incsearch
set hlsearch
set ignorecase
set smartcase
set smartindent

set linebreak
syntax enable
filetype plugin indent on

call plug#begin('~/.local/share/nvim/plugged')
Plug 'Yggdroot/indentLine'
"if has('nvim')
"  Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
" else
"  Plug 'Shougo/deoplete.nvim'
"  Plug 'roxma/nvim-yarp'
"  Plug 'roxma/vim-hug-neovim-rpc'
"endif
"let g:deoplete#enable_at_startup = 1

Plug 'ukyouz/onedark.vim'
"Plug 'vim-syntastic/syntastic'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'ryanoasis/vim-devicons'
Plug 'neomake/neomake'
Plug 'deoplete-plugins/deoplete-jedi'
Plug 'christoomey/vim-tmux-navigator'
call plug#end()

"let g:syntastic_python_checkers = ['pylint']
"let g:syntastic_check_on_open = 1
"let g:syntastic_check_on_wq = 0
let g:indentLine_enabled = 1
let g:indentLine_char_list = ['|', '¦', '┆', '┊']
let g:indentLine_color_tty_light = 7

let g:airline_left_sep=''
let g:airline_right_sep=''
"let g:python3_host_prog = '/usr/bin/python3'
" colorscheme onedark

