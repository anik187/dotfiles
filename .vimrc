let need_to_install_plugins = 0
if empty(glob('~/.vim/autoload/plug.vim'))
    silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
        \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
    let need_to_install_plugins = 1
endif
call plug#begin('~/.vim/plugged')
Plug 'scrooloose/nerdtree'
Plug 'ryanoasis/vim-devicons'
Plug 'ycm-core/YouCompleteMe'
Plug 'vim-syntastic/syntastic'
Plug 'lilydjwg/colorizer'
Plug 'frazrepo/vim-rainbow'
Plug 'Yggdroot/indentLine'
Plug 'dracula/vim'
Plug 'vim-airline/vim-airline'
Plug 'jreybert/vimagit'
Plug 'junegunn/fzf.vim'
Plug 'airblade/vim-gitgutter'
Plug 'tmhedberg/SimpylFold'
Plug 'tpope/vim-commentary'
Plug 'jmcantrell/vim-virtualenv'
Plug 'turbio/bracey.vim', {'do': 'npm install --prefix server'}
call plug#end()

if need_to_install_plugins == 1
    echo "Installing plugins..."
    silent! PlugInstall
    echo "Done!"
    q
endif

let mapleader=','


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => NERDTree
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

map <C-n> :NERDTreeToggle<CR>
nnoremap <silent> <F2> :NERDTreeFind<CR>
let NERDTreeShowLineNumbers=1
let NERDTreeShowHidden=1
let NERDTreeMinimalUI = 1
let g:NERDTreeWinSize=38

set nocompatible
syntax on
set hidden
set smartcase ignorecase
set nu rnu
set noerrorbells
set tabstop=4 softtabstop=4
set shiftwidth=4
set backspace=indent,eol,start
set expandtab
set incsearch
set hlsearch
set nobackup
set noswapfile
set laststatus=2
set statusline=%F%m%r%h%w%=(%{&ff}/%Y)\ (line\ %l\/%L,\ col\ %c)\
set clipboard=unnamedplus
set nocompatible
filetype plugin indent on
set encoding=utf-8
set path+=**
set splitbelow splitright

" Remap splits navigation to just CTRL + hjkl
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

"" Buffer nav
noremap <leader>z :bp<CR>
noremap <leader>q :bp<CR>

"" Vmap for maintain Visual Mode after shifting > and <
vmap < <gv
vmap > >gv

" Make adjusing split sizes a bit more friendly
noremap <silent> <C-Left> :vertical resize +3<CR>
noremap <silent> <C-Right> :vertical resize -3<CR>
noremap <silent> <C-Up> :resize +3<CR>
noremap <silent> <C-Down> :resize -3<CR>

" Search mappings: These will make it so that going to the next one in a
" search will center on the line it's found in.
nnoremap n nzzzv
nnoremap N Nzzzv

" html
" for html files, 2 spaces
autocmd Filetype html setlocal ts=2 sw=2 expandtab


set wildmenu
set mouse=nicr
let g:indentLine_enabled = 1
let g:indentLine_setColors = 0
let g:indentLine_char_list = ['|', '¦', '┆', '┊']
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#branch#enabled  = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq   = 0

set termguicolors
colorscheme dracula
set background=dark
highlight DraculaFg guifg=#bbc5ff
highlight Normal    guifg=#bbc5ff
