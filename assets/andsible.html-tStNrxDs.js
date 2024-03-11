import{_ as t,r as p,o as l,c,a as n,b as s,d as e,e as i}from"./app-CutjyUmw.js";const u={},o=n("h2",{id:"ansible简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ansible简介","aria-hidden":"true"},"#"),s(" ansible简介")],-1),r=n("p",null,"ansible是由python编写的运维工具，支持远程连接到目标服务器执行脚本等操作。",-1),k={href:"https://docs.ansible.com/",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"基本语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本语法","aria-hidden":"true"},"#"),s(" 基本语法")],-1),v=n("h3",{id:"_1-ansible-playbook",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-ansible-playbook","aria-hidden":"true"},"#"),s(" 1.ansible-playbook")],-1),m={href:"https://github.com/a602017206/SampleSite",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> launch jar
  <span class="token key atrule">shell</span><span class="token punctuation">:</span>
      nohup java <span class="token punctuation">{</span><span class="token punctuation">{</span> launch_args <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">-</span>jar <span class="token punctuation">{</span><span class="token punctuation">{</span> deploy_path <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token punctuation">{</span><span class="token punctuation">{</span> jar_name <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">&gt;</span> /dev/null 2<span class="token punctuation">&gt;</span><span class="token important">&amp;1</span> &amp;
  <span class="token key atrule">register</span><span class="token punctuation">:</span> launch_result

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show launch result
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> var=launch_result

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show msg
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_host <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> service_port <span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">#端口校验，验证端口是否已经可用，超时时间300s</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check service running
  <span class="token key atrule">wait_for</span><span class="token punctuation">:</span> 
    <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ ansible_host }}&quot;</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ service_port }}&quot;</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">300</span>
    <span class="token key atrule">delay</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">sleep</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">state</span><span class="token punctuation">:</span> started
    <span class="token key atrule">msg</span><span class="token punctuation">:</span> service start fail
  <span class="token key atrule">register</span><span class="token punctuation">:</span> check_port_result

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show check port result
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> var=check_port_result

<span class="token comment">#服务健康性检查，目前只检查是否返回200状态</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> wait until the page is available
  <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">uri</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;http://{{ ansible_host }}:{{ service_port }}/actuator/health&quot;</span>
  <span class="token key atrule">register</span><span class="token punctuation">:</span> http_api_result
  <span class="token key atrule">until</span><span class="token punctuation">:</span> http_api_result.status == 200
  <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">12</span>
  <span class="token key atrule">delay</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> set http_api_status
  <span class="token key atrule">set_fact</span><span class="token punctuation">:</span>
    <span class="token key atrule">http_api_status</span><span class="token punctuation">:</span> <span class="token string">&#39;{{ http_api_result.status }}&#39;</span>
  <span class="token key atrule">when</span><span class="token punctuation">:</span> http_api_result is success


<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show check http api result
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> var=http_api_result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(_,y){const a=p("ExternalLinkIcon");return l(),c("div",null,[o,r,n("p",null,[n("a",k,[s("ansible官网"),e(a)])]),d,v,n("p",null,[s("使用yml语法编写对应的执行任务，ansible官方有提供一些模块的使用. 这是一个启动服务脚本，具体的可以参考我的 "),n("a",m,[s("SpringBoot骨架工程"),e(a)]),s(" 根目录下的config文件夹。")]),b])}const f=t(u,[["render",h],["__file","andsible.html.vue"]]);export{f as default};
