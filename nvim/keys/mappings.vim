" mapping hjkl to jkl;
noremap ; l
noremap l k
noremap k j
noremap j h
vnoremap ; l
vnoremap l k
vnoremap k j
vnoremap j h
"Better nav for omnicomplete
inoremap <expr> <c-j> ("\<C-n>")
inoremap <expr> <c-k> ("\<C-p>")

" Use alt + hjkl to resize windows
nnoremap <M-k>    :resize -2<CR>
nnoremap <M-l>    :resize +2<CR>
nnoremap <M-j>    :vertical resize -2<CR>
nnoremap <M-;>    :vertical resize +2<CR>
map <F1> :NERDTreeToggle<CR>
"nnoremap <silent> <F2> :NERDTreeFind<CR>
let NERDTreeShowLineNumbers=1
let NERDTreeShowHidden=1
let NERDTreeMinimalUI = 1
let g:NERDTreeWinSize=38


" I hate escape more than anything else
inoremap jk <Esc>
inoremap kj <Esc>

" Easy CAPS
inoremap <c-u> <ESC>viwUi
nnoremap <c-u> viwU<Esc>

" TAB in general mode will move to text buffer
nnoremap <TAB> :bnext<CR>
" SHIFT-TAB will go back
nnoremap <S-TAB> :bprevious<CR>

" Alternate way to save
nnoremap <C-s> :w<CR>
" Alternate way to quit
nnoremap <C-Q> :wq!<CR>
" Use control-c instead of escape
nnoremap <C-c> <Esc>
" <TAB>: completion.
inoremap <expr><TAB> pumvisible() ? "\<C-n>" : "\<TAB>"

" Better tabbing
vnoremap < <gv
vnoremap > >gv

" Better window navigation
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

nnoremap <Leader>o o<Esc>^Da
nnoremap <Leader>O O<Esc>^Da
nnoremap <silent> <leader> :<c-u>WhichKey '<Space>'<CR>

" cpp template loading
nnoremap cpp :-1read ~/template.cpp<CR> 
autocmd filetype cpp nnoremap <F9> :w <bar> !build.sh %:r <CR> 
autocmd filetype cpp nnoremap <F10> :!./%:r<CR>
