import{_ as s,r as e,o as i,c as l,a as n,b as p,d as t,e as c}from"./app-CutjyUmw.js";const r={},o={href:"https://www.jianshu.com/p/7c0df6fcfc71",target:"_blank",rel:"noopener noreferrer"},d=c(`<h1 id="linux常用基本命令" tabindex="-1"><a class="header-anchor" href="#linux常用基本命令" aria-hidden="true">#</a> Linux常用基本命令</h1><h2 id="一-文件和目录" tabindex="-1"><a class="header-anchor" href="#一-文件和目录" aria-hidden="true">#</a> 一.文件和目录</h2><h3 id="_1-cd命令" tabindex="-1"><a class="header-anchor" href="#_1-cd命令" aria-hidden="true">#</a> 1. cd命令</h3><p>用于切换当前目录，它的参数是要切换到的目录的路径，可以是绝对路径，也可以是相对路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home    进入 <span class="token string">&#39;/ home&#39;</span> 目录
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>            返回上一级目录 
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>         返回上两级目录 
<span class="token builtin class-name">cd</span>               进入个人的主目录 
<span class="token builtin class-name">cd</span> ~user1   进入个人的主目录 
<span class="token builtin class-name">cd</span> -             返回上次所在的目录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-pwd命令" tabindex="-1"><a class="header-anchor" href="#_2-pwd命令" aria-hidden="true">#</a> 2. pwd命令</h3><p>显示工作路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mailvip ~<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-ls命令" tabindex="-1"><a class="header-anchor" href="#_3-ls命令" aria-hidden="true">#</a> 3. ls命令</h3><p>查看文件与目录的命令，list之意</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> 查看目录中的文件 
<span class="token function">ls</span> <span class="token parameter variable">-l</span> 显示文件和目录的详细资料 
<span class="token function">ls</span> <span class="token parameter variable">-a</span> 列出全部文件，包含隐藏文件
<span class="token function">ls</span> <span class="token parameter variable">-R</span> 连同子目录的内容一起列出（递归列出），等于该目录下的所有文件都会显示出来  
<span class="token function">ls</span> <span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span> 显示包含数字的文件名和目录名

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-cp命令" tabindex="-1"><a class="header-anchor" href="#_4-cp命令" aria-hidden="true">#</a> 4. cp命令</h3><p>用于复制文件，copy之意，它还可以把多个文件一次性地复制到一个目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-a</span> ：将文件的特性一起复制
<span class="token parameter variable">-p</span> ：连同文件的属性一起复制，而非使用默认方式，与-a相似，常用于备份
<span class="token parameter variable">-i</span> ：若目标文件已经存在时，在覆盖时会先询问操作的进行
<span class="token parameter variable">-r</span> ：递归持续复制，用于目录的复制行为 //经常使用递归复制
<span class="token parameter variable">-u</span> ：目标文件与源文件有差异时才会复制

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-mv命令" tabindex="-1"><a class="header-anchor" href="#_5-mv命令" aria-hidden="true">#</a> 5. mv命令</h3><p>用于移动文件、目录或更名，move之意</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-f</span> ：force强制的意思，如果目标文件已经存在，不会询问而直接覆盖
<span class="token parameter variable">-i</span> ：若目标文件已经存在，就会询问是否覆盖
<span class="token parameter variable">-u</span> ：若目标文件已经存在，且比目标文件新，才会更新

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-rm命令-用于删除文件或目录-remove之意" tabindex="-1"><a class="header-anchor" href="#_6-rm命令-用于删除文件或目录-remove之意" aria-hidden="true">#</a> 6. rm命令，用于删除文件或目录，remove之意</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-f</span> ：就是force的意思，忽略不存在的文件，不会出现警告消息
<span class="token parameter variable">-i</span> ：互动模式，在删除前会询问用户是否操作
<span class="token parameter variable">-r</span> ：递归删除，最常用于目录删除，它是一个非常危险的参数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、查看文件内容" tabindex="-1"><a class="header-anchor" href="#二、查看文件内容" aria-hidden="true">#</a> 二、查看文件内容</h2><h3 id="_7-cat命令" tabindex="-1"><a class="header-anchor" href="#_7-cat命令" aria-hidden="true">#</a> 7. cat命令</h3><p>用于查看文本文件的内容，后接要查看的文件名，通常可用管道与more和less一起使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> file1 从第一个字节开始正向查看文件的内容 
<span class="token function">tac</span> file1 从最后一行开始反向查看一个文件的内容 
<span class="token function">cat</span> <span class="token parameter variable">-n</span> file1 标示文件的行数 
<span class="token function">more</span> file1 查看一个长文件的内容 

<span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">2</span> file1 查看一个文件的前两行 
<span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">2</span> file1 查看一个文件的最后两行 
<span class="token function">tail</span> <span class="token parameter variable">-n</span> +1000 file1  从1000行开始显示，显示1000行以后的
<span class="token function">cat</span> filename <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3000</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +1000  显示1000行到3000行
<span class="token function">cat</span> filename <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +3000 <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1000</span>  从第3000行开始，显示1000<span class="token punctuation">(</span>即显示3000~3999行<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-文件搜索" tabindex="-1"><a class="header-anchor" href="#三-文件搜索" aria-hidden="true">#</a> 三.文件搜索</h2><h3 id="_8-find命令" tabindex="-1"><a class="header-anchor" href="#_8-find命令" aria-hidden="true">#</a> 8. find命令</h3><p>用来查找系统内的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> file1 从 <span class="token string">&#39;/&#39;</span> 开始进入根文件系统搜索文件和目录 
<span class="token function">find</span> / <span class="token parameter variable">-user</span> user1 搜索属于用户 <span class="token string">&#39;user1&#39;</span> 的文件和目录 
<span class="token function">find</span> /usr/bin <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +100 搜索在过去100天内未被使用过的执行文件 
<span class="token function">find</span> /usr/bin <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> <span class="token parameter variable">-10</span> 搜索在10天内被创建或者修改过的文件 
<span class="token function">whereis</span> <span class="token function">halt</span> 显示一个二进制文件、源码或man的位置 
<span class="token function">which</span> <span class="token function">halt</span> 显示一个二进制文件或可执行文件的完整路径

删除大于50M的文件：
<span class="token function">find</span> /var/mail/ <span class="token parameter variable">-size</span> +50M <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> ＼<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-文件的权限" tabindex="-1"><a class="header-anchor" href="#四-文件的权限" aria-hidden="true">#</a> 四.文件的权限</h2><ul><li>使用 &quot;+&quot; 设置权限，使用 &quot;-&quot; 用于取消</li></ul><h3 id="_9-chmod命令" tabindex="-1"><a class="header-anchor" href="#_9-chmod命令" aria-hidden="true">#</a> 9. chmod命令</h3><p>改变文件/文件夹权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-lh</span> 显示权限 
<span class="token function">chmod</span> ugo+rwx directory1 设置目录的所有人<span class="token punctuation">(</span>u<span class="token punctuation">)</span>、群组<span class="token punctuation">(</span>g<span class="token punctuation">)</span>以及其他人<span class="token punctuation">(</span>o<span class="token punctuation">)</span>以读（r，4 ）、写<span class="token punctuation">(</span>w，2<span class="token punctuation">)</span>和执行<span class="token punctuation">(</span>x，1<span class="token punctuation">)</span>的权限 
<span class="token function">chmod</span> go-rwx directory1  删除群组<span class="token punctuation">(</span>g<span class="token punctuation">)</span>与其他人<span class="token punctuation">(</span>o<span class="token punctuation">)</span>对目录的读写执行权限

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-chown命令" tabindex="-1"><a class="header-anchor" href="#_10-chown命令" aria-hidden="true">#</a> 10. chown命令</h3><p>改变文件的所有者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> user1 file1 改变一个文件的所有人属性 
<span class="token function">chown</span> <span class="token parameter variable">-R</span> user1 directory1 改变一个目录的所有人属性并同时改变改目录下所有文件的属性 
<span class="token function">chown</span> user1:group1 file1 改变一个文件的所有人和群组属性

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-chgrp命令" tabindex="-1"><a class="header-anchor" href="#_11-chgrp命令" aria-hidden="true">#</a> 11.chgrp命令</h3><p>改变文件所属用户组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chgrp</span> group1 file1 改变文件的群组

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-文本处理" tabindex="-1"><a class="header-anchor" href="#五-文本处理" aria-hidden="true">#</a> 五.文本处理</h2><h3 id="_12-grep命令" tabindex="-1"><a class="header-anchor" href="#_12-grep命令" aria-hidden="true">#</a> 12. grep命令</h3><p>分析一行的信息，若当中有我们所需要的信息，就将该行显示出来，该命令通常与管道命令一起使用，用于对一些命令的输出进行筛选加工等等</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> Aug /var/log/messages  在文件 <span class="token string">&#39;/var/log/messages&#39;</span>中查找关键词<span class="token string">&quot;Aug&quot;</span> 

<span class="token function">grep</span> ^Aug /var/log/messages 在文件 <span class="token string">&#39;/var/log/messages&#39;</span>中查找以<span class="token string">&quot;Aug&quot;</span>开始的词汇 
<span class="token function">grep</span> <span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>  /var/log/messages 选择 <span class="token string">&#39;/var/log/messages&#39;</span> 文件中所有包含数字的行 

<span class="token function">grep</span> Aug <span class="token parameter variable">-R</span> /var/log/* 在目录 <span class="token string">&#39;/var/log&#39;</span> 及随后的目录中搜索字符串<span class="token string">&quot;Aug&quot;</span> 

<span class="token function">sed</span> <span class="token string">&#39;s/stringa1/stringa2/g&#39;</span> example.txt 将example.txt文件中的 <span class="token string">&quot;string1&quot;</span> 替换成 <span class="token string">&quot;string2&quot;</span> 

<span class="token function">sed</span> <span class="token string">&#39;/^$/d&#39;</span> example.txt 从example.txt文件中删除所有空白行

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-paste命令" tabindex="-1"><a class="header-anchor" href="#_13-paste命令" aria-hidden="true">#</a> 13. paste命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">paste</span> file1 file2 合并两个文件或两栏的内容 
<span class="token function">paste</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;+&#39;</span> file1 file2 合并两个文件或两栏的内容，中间用<span class="token string">&quot;+&quot;</span>区分

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-sort命令" tabindex="-1"><a class="header-anchor" href="#_14-sort命令" aria-hidden="true">#</a> 14. sort命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> file1 file2 排序两个文件的内容 
<span class="token function">sort</span> file1 file2 <span class="token operator">|</span> <span class="token function">uniq</span> 取出两个文件的并集<span class="token punctuation">(</span>重复的行只保留一份<span class="token punctuation">)</span> 
<span class="token function">sort</span> file1 file2 <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span> 删除交集，留下其他的行 
<span class="token function">sort</span> file1 file2 <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-d</span> 取出两个文件的交集<span class="token punctuation">(</span>只留下同时存在于两个文件中的文件<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-comm命令" tabindex="-1"><a class="header-anchor" href="#_15-comm命令" aria-hidden="true">#</a> 15. comm命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">comm</span> <span class="token parameter variable">-1</span> file1 file2 比较两个文件的内容只删除 <span class="token string">&#39;file1&#39;</span> 所包含的内容 
<span class="token function">comm</span> <span class="token parameter variable">-2</span> file1 file2 比较两个文件的内容只删除 <span class="token string">&#39;file2&#39;</span> 所包含的内容 
<span class="token function">comm</span> <span class="token parameter variable">-3</span> file1 file2 比较两个文件的内容只删除两个文件共有的部分

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、打包和压缩文件" tabindex="-1"><a class="header-anchor" href="#六、打包和压缩文件" aria-hidden="true">#</a> 六、打包和压缩文件</h2><h3 id="_16-tar命令" tabindex="-1"><a class="header-anchor" href="#_16-tar命令" aria-hidden="true">#</a> 16. tar命令</h3><p>对文件进行打包，默认情况并不会压缩，如果指定了相应的参数，它还会调用相应的压缩程序（如gzip和bzip等）进行压缩和解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span> ：新建打包文件
<span class="token parameter variable">-t</span> ：查看打包文件的内容含有哪些文件名
<span class="token parameter variable">-x</span> ：解打包或解压缩的功能，可以搭配-C（大写）指定解压的目录，注意-c,-t,-x不能同时出现在同一条命令中
<span class="token parameter variable">-j</span> ：通过bzip2的支持进行压缩/解压缩
<span class="token parameter variable">-z</span> ：通过gzip的支持进行压缩/解压缩
<span class="token parameter variable">-v</span> ：在压缩/解压缩过程中，将正在处理的文件名显示出来
<span class="token parameter variable">-f</span> filename ：filename为要处理的文件
<span class="token parameter variable">-C</span> <span class="token function">dir</span> ：指定压缩/解压缩的目录dir
压缩：tar <span class="token parameter variable">-jcv</span> <span class="token parameter variable">-f</span> filename.tar.bz2 要被处理的文件或目录名称
查询：tar <span class="token parameter variable">-jtv</span> <span class="token parameter variable">-f</span> filename.tar.bz2
解压：tar <span class="token parameter variable">-jxv</span> <span class="token parameter variable">-f</span> filename.tar.bz2 <span class="token parameter variable">-C</span> 欲解压缩的目录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bunzip2 file1.bz2 解压一个叫做 <span class="token string">&#39;file1.bz2&#39;</span>的文件 
<span class="token function">bzip2</span> file1 压缩一个叫做 <span class="token string">&#39;file1&#39;</span> 的文件 
gunzip file1.gz 解压一个叫做 <span class="token string">&#39;file1.gz&#39;</span>的文件 
<span class="token function">gzip</span> file1 压缩一个叫做 <span class="token string">&#39;file1&#39;</span>的文件 
<span class="token function">gzip</span> <span class="token parameter variable">-9</span> file1 最大程度压缩 
<span class="token function">rar</span> a file1.rar test_file 创建一个叫做 <span class="token string">&#39;file1.rar&#39;</span> 的包 
<span class="token function">rar</span> a file1.rar file1 file2 dir1 同时压缩 <span class="token string">&#39;file1&#39;</span>, <span class="token string">&#39;file2&#39;</span> 以及目录 <span class="token string">&#39;dir1&#39;</span> 
<span class="token function">rar</span> x file1.rar 解压rar包

<span class="token function">zip</span> file1.zip file1 创建一个zip格式的压缩包 
<span class="token function">unzip</span> file1.zip 解压一个zip格式压缩包 
<span class="token function">zip</span> <span class="token parameter variable">-r</span> file1.zip file1 file2 dir1 将几个文件和目录同时压缩成一个zip格式的压缩包

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-系统和关机-关机、重启和登出" tabindex="-1"><a class="header-anchor" href="#七-系统和关机-关机、重启和登出" aria-hidden="true">#</a> 七.系统和关机（关机、重启和登出）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now 关闭系统<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
init <span class="token number">0</span> 关闭系统<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 
telinit <span class="token number">0</span> 关闭系统<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> hours:minutes <span class="token operator">&amp;</span> 按预定时间关闭系统 
<span class="token function">shutdown</span> <span class="token parameter variable">-c</span> 取消按预定时间关闭系统 
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now 重启<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token function">reboot</span> 重启<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 
<span class="token builtin class-name">logout</span> 注销 
<span class="token function">time</span> 测算一个命令（即程序）的执行时间 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、进程相关的命令" tabindex="-1"><a class="header-anchor" href="#八、进程相关的命令" aria-hidden="true">#</a> 八、进程相关的命令</h2><h3 id="_17-jps命令" tabindex="-1"><a class="header-anchor" href="#_17-jps命令" aria-hidden="true">#</a> 17. jps命令</h3><p>显示当前系统的java进程情况，及其id号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jps(Java Virtual Machine Process Status Tool)是JDK 1.5提供的一个显示当前所有java进程pid的命令，简单实用，非常适合在linux/unix平台上简单察看当前java进程的一些简单情况。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-ps命令" tabindex="-1"><a class="header-anchor" href="#_18-ps命令" aria-hidden="true">#</a> 18. ps命令</h3><p>用于将某个时间点的进程运行情况选取下来并输出，process之意</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-A</span> ：所有的进程均显示出来
<span class="token parameter variable">-a</span> ：不与terminal有关的所有进程
<span class="token parameter variable">-u</span> ：有效用户的相关进程
<span class="token parameter variable">-x</span> ：一般与a参数一起使用，可列出较完整的信息
<span class="token parameter variable">-l</span> ：较长，较详细地将PID的信息列出

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token comment"># 查看系统所有的进程数据</span>
<span class="token function">ps</span> ax <span class="token comment"># 查看不与terminal有关的所有进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-lA</span> <span class="token comment"># 查看系统所有的进程数据</span>
<span class="token function">ps</span> axjf <span class="token comment"># 查看连同一部分进程树状态</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-kill命令" tabindex="-1"><a class="header-anchor" href="#_19-kill命令" aria-hidden="true">#</a> 19. kill命令</h3><p>用于向某个工作（%jobnumber）或者是某个PID（数字）传送一个信号，它通常与ps和jobs命令一起使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令格式 <span class="token builtin class-name">:</span> kill<span class="token punctuation">[</span>命令参数<span class="token punctuation">]</span><span class="token punctuation">[</span>进程id<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令参数:
<span class="token parameter variable">-l</span>  信号，若果不加信号的编号参数，则使用“-l”参数会列出全部的信号名称
<span class="token parameter variable">-a</span>  当处理当前进程时，不限制命令名和进程号的对应关系
<span class="token parameter variable">-p</span>  指定kill 命令只打印相关进程的进程号，而不发送任何信号
<span class="token parameter variable">-s</span>  指定发送信号
<span class="token parameter variable">-u</span>  指定用户

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>实例1：列出所有信号名称
命令：kill <span class="token parameter variable">-l</span>
输出：
<span class="token punctuation">[</span>root@localhost test6<span class="token punctuation">]</span><span class="token comment"># kill -l</span>
 <span class="token number">1</span><span class="token punctuation">)</span> SIGHUP       <span class="token number">2</span><span class="token punctuation">)</span> SIGINT       <span class="token number">3</span><span class="token punctuation">)</span> SIGQUIT      <span class="token number">4</span><span class="token punctuation">)</span> SIGILL
 <span class="token number">5</span><span class="token punctuation">)</span> SIGTRAP      <span class="token number">6</span><span class="token punctuation">)</span> SIGABRT      <span class="token number">7</span><span class="token punctuation">)</span> SIGBUS       <span class="token number">8</span><span class="token punctuation">)</span> SIGFPE
 <span class="token number">9</span><span class="token punctuation">)</span> SIGKILL     <span class="token number">10</span><span class="token punctuation">)</span> SIGUSR1     <span class="token number">11</span><span class="token punctuation">)</span> SIGSEGV     <span class="token number">12</span><span class="token punctuation">)</span> SIGUSR2
<span class="token number">13</span><span class="token punctuation">)</span> SIGPIPE     <span class="token number">14</span><span class="token punctuation">)</span> SIGALRM     <span class="token number">15</span><span class="token punctuation">)</span> SIGTERM     <span class="token number">16</span><span class="token punctuation">)</span> SIGSTKFLT
<span class="token number">17</span><span class="token punctuation">)</span> SIGCHLD     <span class="token number">18</span><span class="token punctuation">)</span> SIGCONT     <span class="token number">19</span><span class="token punctuation">)</span> SIGSTOP     <span class="token number">20</span><span class="token punctuation">)</span> SIGTSTP
<span class="token number">21</span><span class="token punctuation">)</span> SIGTTIN     <span class="token number">22</span><span class="token punctuation">)</span> SIGTTOU     <span class="token number">23</span><span class="token punctuation">)</span> SIGURG      <span class="token number">24</span><span class="token punctuation">)</span> SIGXCPU
<span class="token number">25</span><span class="token punctuation">)</span> SIGXFSZ     <span class="token number">26</span><span class="token punctuation">)</span> SIGVTALRM   <span class="token number">27</span><span class="token punctuation">)</span> SIGPROF     <span class="token number">28</span><span class="token punctuation">)</span> SIGWINCH
<span class="token number">29</span><span class="token punctuation">)</span> SIGIO       <span class="token number">30</span><span class="token punctuation">)</span> SIGPWR      <span class="token number">31</span><span class="token punctuation">)</span> SIGSYS      <span class="token number">34</span><span class="token punctuation">)</span> SIGRTMIN
<span class="token number">35</span><span class="token punctuation">)</span> SIGRTMIN+1  <span class="token number">36</span><span class="token punctuation">)</span> SIGRTMIN+2  <span class="token number">37</span><span class="token punctuation">)</span> SIGRTMIN+3  <span class="token number">38</span><span class="token punctuation">)</span> SIGRTMIN+4
<span class="token number">39</span><span class="token punctuation">)</span> SIGRTMIN+5  <span class="token number">40</span><span class="token punctuation">)</span> SIGRTMIN+6  <span class="token number">41</span><span class="token punctuation">)</span> SIGRTMIN+7  <span class="token number">42</span><span class="token punctuation">)</span> SIGRTMIN+8
<span class="token number">43</span><span class="token punctuation">)</span> SIGRTMIN+9  <span class="token number">44</span><span class="token punctuation">)</span> SIGRTMIN+10 <span class="token number">45</span><span class="token punctuation">)</span> SIGRTMIN+11 <span class="token number">46</span><span class="token punctuation">)</span> SIGRTMIN+12
<span class="token number">47</span><span class="token punctuation">)</span> SIGRTMIN+13 <span class="token number">48</span><span class="token punctuation">)</span> SIGRTMIN+14 <span class="token number">49</span><span class="token punctuation">)</span> SIGRTMIN+15 <span class="token number">50</span><span class="token punctuation">)</span> SIGRTMAX-14
<span class="token number">51</span><span class="token punctuation">)</span> SIGRTMAX-13 <span class="token number">52</span><span class="token punctuation">)</span> SIGRTMAX-12 <span class="token number">53</span><span class="token punctuation">)</span> SIGRTMAX-11 <span class="token number">54</span><span class="token punctuation">)</span> SIGRTMAX-10
<span class="token number">55</span><span class="token punctuation">)</span> SIGRTMAX-9  <span class="token number">56</span><span class="token punctuation">)</span> SIGRTMAX-8  <span class="token number">57</span><span class="token punctuation">)</span> SIGRTMAX-7  <span class="token number">58</span><span class="token punctuation">)</span> SIGRTMAX-6
<span class="token number">59</span><span class="token punctuation">)</span> SIGRTMAX-5  <span class="token number">60</span><span class="token punctuation">)</span> SIGRTMAX-4  <span class="token number">61</span><span class="token punctuation">)</span> SIGRTMAX-3  <span class="token number">62</span><span class="token punctuation">)</span> SIGRTMAX-2
<span class="token number">63</span><span class="token punctuation">)</span> SIGRTMAX-1  <span class="token number">64</span><span class="token punctuation">)</span> SIGRTMAX

说明：
只有第9种信号<span class="token punctuation">(</span>SIGKILL<span class="token punctuation">)</span>才可以无条件终止进程，其他信号进程都有权利忽略。    下面是常用的信号：
HUP    <span class="token number">1</span>    终端断线
INT     <span class="token number">2</span>    中断（同 Ctrl + C）
QUIT    <span class="token number">3</span>    退出（同 Ctrl + <span class="token punctuation">\\</span>）
<span class="token environment constant">TERM</span>   <span class="token number">15</span>    终止
KILL    <span class="token number">9</span>    强制终止
CONT   <span class="token number">18</span>    继续（与STOP相反， fg/bg命令）
STOP    <span class="token number">19</span>    暂停（同 Ctrl + Z）

实例2：得到指定信号的数值

<span class="token punctuation">[</span>root@localhost test6<span class="token punctuation">]</span><span class="token comment"># kill -l KILL</span>
<span class="token punctuation">[</span>root@localhost test6<span class="token punctuation">]</span><span class="token comment"># kill -l SIGKILL</span>
<span class="token punctuation">[</span>root@localhost test6<span class="token punctuation">]</span><span class="token comment"># kill -l TERM</span>
<span class="token punctuation">[</span>root@localhost test6<span class="token punctuation">]</span><span class="token comment"># kill -l SIGTERM</span>
<span class="token punctuation">[</span>root@localhost test6<span class="token punctuation">]</span><span class="token comment">#</span>

实例3：先用ps查找进程，然后用kill杀掉

命令：kill <span class="token number">3268</span>
<span class="token punctuation">[</span>root@localhost test6<span class="token punctuation">]</span><span class="token comment"># ps -ef|grep vim </span>
root      <span class="token number">3268</span>  <span class="token number">2884</span>  <span class="token number">0</span> <span class="token number">16</span>:21 pts/1    00:00:00 <span class="token function">vim</span> install.log
root      <span class="token number">3370</span>  <span class="token number">2822</span>  <span class="token number">0</span> <span class="token number">16</span>:21 pts/0    00:00:00 <span class="token function">grep</span> <span class="token function">vim</span>
<span class="token punctuation">[</span>root@localhost test6<span class="token punctuation">]</span><span class="token comment"># kill 3268 </span>

实例4：彻底杀死进程
命令：kill –9 <span class="token number">3268</span>   // <span class="token parameter variable">-9</span> 强制杀掉进程

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-killall命令" tabindex="-1"><a class="header-anchor" href="#_20-killall命令" aria-hidden="true">#</a> 20. killall命令</h3><p>向一个命令启动的进程发送一个信号，用于杀死指定名字的进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令格式 <span class="token builtin class-name">:</span> killall<span class="token punctuation">[</span>命令参数<span class="token punctuation">]</span><span class="token punctuation">[</span>进程名<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令参数：
<span class="token parameter variable">-Z</span> 只杀死拥有scontext 的进程
<span class="token parameter variable">-e</span> 要求匹配进程名称
<span class="token parameter variable">-I</span> 忽略小写
<span class="token parameter variable">-g</span> 杀死进程组而不是进程
<span class="token parameter variable">-i</span> 交互模式，杀死进程前先询问用户
<span class="token parameter variable">-l</span> 列出所有的已知信号名称
<span class="token parameter variable">-q</span> 不输出警告信息
<span class="token parameter variable">-s</span> 发送指定的信号
<span class="token parameter variable">-v</span> 报告信号是否成功发送
<span class="token parameter variable">-w</span> 等待进程死亡
<span class="token parameter variable">--help</span> 显示帮助信息
<span class="token parameter variable">--version</span> 显示版本显示

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>示例
<span class="token number">1</span>：杀死所有同名进程
    <span class="token function">killall</span> nginx
    <span class="token function">killall</span> <span class="token parameter variable">-9</span> <span class="token function">bash</span>

<span class="token number">2</span>.向进程发送指定信号
    <span class="token function">killall</span> <span class="token parameter variable">-TERM</span> ngixn  或者  <span class="token function">killall</span> <span class="token parameter variable">-KILL</span> nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-top命令" tabindex="-1"><a class="header-anchor" href="#_21-top命令" aria-hidden="true">#</a> 21. top命令</h3><p>是Linux下常用的性能分析工具，能够实时显示系统中各个进程的资源占用状况，类似于Windows的任务管理器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>如何杀死进程：
（1）图形化界面的方式
（2）kill <span class="token parameter variable">-9</span> pid  （-9表示强制关闭）
（3）killall <span class="token parameter variable">-9</span> 程序的名字
（4）pkill 程序的名字

查看进程端口号：
<span class="token function">netstat</span> -tunlp<span class="token operator">|</span><span class="token function">grep</span> 端口号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76);function u(v,m){const a=e("ExternalLinkIcon");return i(),l("div",null,[n("p",null,[n("a",o,[p("原贴地址"),t(a)])]),d])}const k=s(r,[["render",u],["__file","Linux_commend.html.vue"]]);export{k as default};
