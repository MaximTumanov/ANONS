/*CALENDAR.PACK*/
/*
	dynDateTime 0.2
	
	A jQuery date time picker.
	
	Author: Toolman
	Version: 0.2
	Website: http://code.google.com/p/dyndatetime/

*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(N($){$.5c.3V=N(o){$.5c.3V.6d={3W:X,3p:X,6k:"8u",34:"%Y/%m/%d",44:"%Y/%m/%d",6A:1f,4Z:X,4T:X,4N:X,64:"80",2Z:[4q,7x],1A:1f,2T:X,48:X,2x:X,2Y:X,41:X,1c:X,2c:17,54:"24",6j:1f,2H:2,2F:X,69:17,4G:17,1v:X,5Z:17};G q=$.7O({},$.5c.3V.6d,o);Q J.7w(N(){G n=J;G k=X;G h=X;G l=X;F(q.3W){4a{k=4e("3B(J)"+q.3W+".3q(0);")}4u(3Z){q.3W=X}}F(q.3p){4a{h=4e("3B(J)"+q.3p+".3q(0);")}4u(3Z){q.3p=X}}F(q.2T){4a{l=4e("3B(J)"+q.2T+".3q(0);")}4u(3Z){q.2T=X}}F(!(l||q.1v||n||k||h)){2C("3X");Q}N 2x(b){G p=b.3X;G a=(b.2e||p.6j);F(a&&n){n.58=b.1c.2a(p.34);F(1m n.6p=="N")n.6p()}F(a&&k)k.1g=b.1c.2a(p.44);F(a&&1m p.41=="N")p.41(b);F(a&&p.2T){F(1m p.48=="N")p.48(b)}F(a&&p.6A&&b.2e)b.2L()};F(l!=X){G m=1d E(q.4N,q.1c,q.2x||2x);m.3j=q.4G;m.2c=q.2c;m.3F=(q.54=="24");m.3X=q;m.1A=q.1A;m.4R(q.2Z[0],q.2Z[1]);m.4L(q.4Z);m.3f=q.4T;F(q.34){m.4I(q.34)}F(n&&1m n.58=="65"){2C("8c")}m.4B(l);m.4y();Q}G j=h||k||n;j["2Q"+q.6k]=N(){2C("7V");G g=n||k;G f=n?q.34:q.44;G b=17;G c=1i.1x;F(g)q.1c=16.3T(g.58||g.1g,f);F(!(c&&q.69)){1i.1x=c=1d E(q.4N,q.1c,q.2x||2x,q.2Y||N(a){a.4m()});c.2c=q.2c;c.3F=(q.54=="24");c.1A=q.1A;b=1f}O{F(q.1c)c.1p(q.1c);c.4m()}F(q.1v){c.1v={};1h(G i=q.1v.1o;--i>=0;){G d=q.1v[i];G e=d.2a("%Y%m%d");c.1v[e]=d}}c.3j=q.4G;c.3v=q.2H;c.4R(q.2Z[0],q.2Z[1]);c.3X=q;c.4L(q.4Z);c.3f=q.4T;c.4I(f);F(b)c.4B();c.5D();F(!q.2F)c.5A(h||k||n,q.64);O c.3t(q.2F[0],q.2F[1]);Q 17}});N 2C(a){F(q.5Z){1i.7c();F(1i.4b&&1i.4b.2C)1i.4b.2C("3V: "+a)}}}})(3B);E=N(b,c,a,e){J.2w=X;J.1W=X;J.2I=X;J.3r=X;J.3f=X;J.1N=X;J.4s=a||X;J.2Y=e||X;J.2W=17;J.2D=17;J.2l=6V;J.2k=6P;J.3s=E.1n["6L"];J.4H=E.1n["6I"];J.1R=1f;J.1A=1f;J.2b=1m b=="6y"?b:E.8O;J.3j=17;J.5b=c;J.2d=X;J.2c=17;J.3F=1f;J.3v=2;J.6u=1f;J.1v=X;J.2E=X;J.1u=X;J.3R=X;J.57=X;J.2N=X;J.3O=X;J.1U=X;J.3N=X;J.1S=X;J.3M=X;J.2e=17;F(1m E.3L=="1B"){F(1m E.51=="1B")E.51=3;G d=1d 2K();1h(G i=8;i>0;){d[--i]=E.4X[i].22(0,E.51)}E.3L=d;F(1m E.4V=="1B")E.4V=3;d=1d 2K();1h(G i=12;i>0;){d[--i]=E.2r[i].22(0,E.4V)}E.3G=d}};E.1D=X;E.1z=(/6e/i.1F(3h.3g)&&!/6a/i.1F(3h.3g));E.4J=(E.1z&&/6e 5\\.0/i.1F(3h.3g));E.68=/6a/i.1F(3h.3g);E.3D=/8g|8e|8b/i.1F(3h.3g);E.2p=N(a){G d=0,4A=0;G b=/^1K$/i.1F(a.61);F(b&&a.3a)d=a.3a;F(b&&a.35)4A=a.35;G r={x:a.33-d,y:a.4v-4A};F(a.5V){G c=J.2p(a.5V);r.x+=c.x;r.y+=c.y}Q r};E.4P=N(b,d){G a=d.7S;F(!a){G c=d.5S;F(c=="3C"){a=d.7Q}O F(c=="5R"){a=d.7L}}3k(a){F(a==b){Q 1f}a=a.1y}Q 17};E.1j=N(a,b){F(!(a&&a.19)){Q}G d=a.19.5N(" ");G c=1d 2K();1h(G i=d.1o;i>0;){F(d[--i]!=b){c[c.1o]=d[i]}}a.19=c.7E(" ")};E.1G=N(b,a){E.1j(b,a);b.19+=" "+a};E.2q=N(a){G f=E.1z?1i.1M.5L:a.7v;3k(f.5K!=1||/^1K$/i.1F(f.61))f=f.1y;Q f};E.2U=N(a){G f=E.1z?1i.1M.5L:a.7r;3k(f.5K!=1)f=f.1y;Q f};E.1P=N(a){a||(a=1i.1M);F(E.1z){a.7p=1f;a.7o=17}O{a.7m();a.7l()}Q 17};E.1C=N(c,a,b){F(c.5F){c.5F("2Q"+a,b)}O F(c.5E){c.5E(a,b,1f)}O{c["2Q"+a]=b}};E.1V=N(c,a,b){F(c.5C){c.5C("2Q"+a,b)}O F(c.5B){c.5B(a,b,1f)}O{c["2Q"+a]=X}};E.1e=N(a,b){G c=X;F(1b.5x){c=1b.5x("5v://7b.7a.77/76/75",a)}O{c=1b.1e(a)}F(1m b!="1B"){b.2g(c)}Q c};E.2u=N(a){2A(E){1C(a,"3C",5t);1C(a,"3w",5s);1C(a,"5R",5q);F(1z){1C(a,"74",5n);a.73("5m",1f)}}};E.4j=N(a){F(1m a.2B!="1B"){Q a}O F(1m a.1y.2B!="1B"){Q a.1y}Q X};E.4p=N(a){F(1m a.2J!="1B"){Q a}O F(1m a.1y.2J!="1B"){Q a.1y}Q X};E.5T=N(){G b=E.1D;F(!b){Q 17}G b=b;G a=b.2w;G c=b.2N;F(b.1U){E.1j(b.1U,"1t")}F(b.3N){E.1j(b.3N,"26")}G d=b.2N.2X("1K")[b.1c.1q()];E.1G(d,"26");b.3N=d;G s=c.1l;s.1H="36";F(a.1k<0)s.2j=a.33+"1Q";O{G e=c.1L;F(1m e=="1B")e=50;s.2j=(a.33+a.1L-e)+"1Q"}s.3c=(a.4v+a.1Y)+"1Q"};E.4F=N(e){G g=E.1D;F(!g){Q 17}G g=g;G f=g.2w;G d=g.3O;F(g.1S){E.1j(g.1S,"1t")}F(g.3M){E.1j(g.3M,"26")}g.3M=X;G Y=g.1c.1s()+(e?1:-1);G a=d.3e;G b=17;1h(G i=12;i>0;--i){F(Y>=g.2l&&Y<=g.2k){a.1g=Y;a.2J=Y;a.1l.1H="36";b=1f}O{a.1l.1H="2i"}a=a.2R;Y+=e?g.3v:-g.3v}F(b){G s=d.1l;s.1H="36";F(f.1k<0)s.2j=f.33+"1Q";O{G c=d.1L;F(1m c=="1B")c=50;s.2j=(f.33+f.1L-c)+"1Q"}s.3c=(f.4v+f.1Y)+"1Q"}};E.3E=N(c){G a=E.1D;F(!a){Q 17}F(a.1N){4M(a.1N)}G d=a.2w;F(!d){Q 17}G b=E.2U(c);c||(c=1i.1M);E.1j(d,"26");F(b==d||b.1y==d){E.1O(d,c)}G e=E.4j(b);G g=X;F(e){g=1d 16(a.1c);F(e.2B!=g.1q()){g.1T(e.2B);a.1p(g);a.2e=17;a.3o()}}O{G f=E.4p(b);F(f){g=1d 16(a.1c);F(f.2J!=g.1s()){g.1J(f.2J);a.1p(g);a.2e=17;a.3o()}}}2A(E){1V(1b,"3U",3E);1V(1b,"3C",3m);1V(1b,"3b",3m);a.6t();1D=X;Q 1P(c)}};E.3m=N(b){G n=E.1D;F(!n){Q}G l=n.2w;G f=E.2U(b);F(f==l||f.1y==l){E.1G(l,"1t 26");E.1G(l.1y,"3n")}O{F(1m l.1k=="1B"||(l.1k!=50&&(l.1k==0||2m.6s(l.1k)>2)))E.1j(l,"26");E.1j(l,"1t");E.1j(l.1y,"3n")}b||(b=1i.1M);F(l.1k==50&&f!=l){G c=E.2p(l);G w=l.1L;G x=b.3S;G a;G d=1f;F(x>c.x+w){a=x-c.x-w;d=17}O a=c.x-x;F(a<0)a=0;G j=l.2P;G g=l.6r;G h=2m.3Q(a/10)%j.1o;1h(G i=j.1o;--i>=0;)F(j[i]==g)18;3k(h-->0)F(d){F(--i<0)i=j.1o-1}O F(++i>=j.1o)i=0;G m=j[i];l.1g=m;n.3P()}G k=E.4j(f);F(k){F(k.2B!=n.1c.1q()){F(n.1U){E.1j(n.1U,"1t")}E.1G(k,"1t");n.1U=k}O F(n.1U){E.1j(n.1U,"1t")}}O{F(n.1U){E.1j(n.1U,"1t")}G e=E.4p(f);F(e){F(e.2J!=n.1c.1s()){F(n.1S){E.1j(n.1S,"1t")}E.1G(e,"1t");n.1S=e}O F(n.1S){E.1j(n.1S,"1t")}}O F(n.1S){E.1j(n.1S,"1t")}}Q E.1P(b)};E.6q=N(a){F(E.2U(a)==E.2q(a)){Q E.1P(a)}};E.56=N(d){G c=E.1D;F(!(c&&c.2W)){Q 17}G a;G b;F(E.1z){b=1i.1M.55+1b.20.35;a=1i.1M.3S+1b.20.3a}O{a=d.8D;b=d.8C}c.2M();G e=c.1u.1l;e.2j=(a-c.6o)+"1Q";e.3c=(b-c.6n)+"1Q";Q E.1P(d)};E.53=N(a){G b=E.1D;F(!b){Q 17}b.2W=17;2A(E){1V(1b,"3b",56);1V(1b,"3U",53);3E(a)}b.2M()};E.5s=N(a){G b=E.2q(a);F(b.1I){Q 17}G c=b.1x;c.2w=b;E.1D=c;F(b.1k!=3K)2A(E){F(b.1k==50){b.6r=b.1g;1C(1b,"3b",3m)}O 1C(1b,E.4J?"3b":"3C",3m);1G(b,"1t 26");1C(1b,"3U",3E)}O F(c.1R){c.6m(a)}F(b.1k==-1||b.1k==1){F(c.1N)4M(c.1N);c.1N=52("E.5T()",6l)}O F(b.1k==-2||b.1k==2){F(c.1N)4M(c.1N);c.1N=52((b.1k>0)?"E.4F(1f)":"E.4F(17)",6l)}O{c.1N=X}Q E.1P(a)};E.5n=N(a){E.1O(E.2q(a),a||1i.1M);F(E.1z){1b.8B.8A()}};E.5t=N(a){G b=E.2q(a);F(E.4P(b,a)||E.1D||b.1I){Q 17}F(b.1r){F(b.1r.22(0,1)=="6i"){b.1r=b.3l.2a(b.1x.4H)+b.1r.22(1)}b.1x.4Y.1g=b.1r}F(b.1k!=3K){E.1G(b,"1t");F(b.3l){E.1G(b.1y,"3n")}}Q E.1P(a)};E.5q=N(a){2A(E){G b=2q(a);F(4P(b,a)||1D||b.1I)Q 17;1j(b,"1t");F(b.3l)1j(b.1y,"3n");F(b.1x)b.1x.4Y.1g=1n["6h"];Q 1P(a)}};E.1O=N(n,d){G p=n.1x;G j=17;G g=17;G l=X;F(1m n.1k=="1B"){F(p.1W){E.1j(p.1W,"2O");E.1G(n,"2O");j=(p.1W==n);F(!j){p.1W=n}}p.1c.4W(n.3l);l=p.1c;G q=!(p.2e=!n.3I);F(!q&&!p.1W)p.6g(1d 16(l));O g=!n.1I;F(q)p.2G(p.2b,l)}O{F(n.1k==6f){E.1j(n,"1t");p.2L();Q}l=1d 16(p.1c);F(n.1k==0)l.4W(1d 16());p.2e=17;G e=l.1s();G k=l.1q();N 1T(m){G b=l.1w();G a=l.4U(m);F(b>a){l.1p(a)}l.1T(m)};2f(n.1k){14 4S:E.1j(n,"1t");G c=E.1n["8z"];F(1m c!="1B"){c+=p.2c?E.1n["8y"]:""}O{c="8x 4Q 8w 8v 8t 8s 8r 8q 6c J 6b.\\n"+"8p 4K 8o J 6b 4Q 4K 8n 8m 8l 8k\\n"+"67 8j 8i 66 \\"8f\\" 8d 4E 4D 1x-8a.88\\n"+"4Q 87 63 86 4E <85@84.62> 4E 3q 63 6c 67 83  ;-)\\n\\n"+"82 4K!\\n"+"5v://81.62/7Z/1x.7Y\\n"}7X(c);Q;14-2:F(e>p.2l){l.1J(e-1)}18;14-1:F(k>0){1T(k-1)}O F(e-->p.2l){l.1J(e);1T(11)}18;14 1:F(k<11){1T(k+1)}O F(e<p.2k){l.1J(e+1);1T(0)}18;14 2:F(e<p.2k){l.1J(e+1)}18;14 25:p.5Y(n.5X);Q;14 50:G h=n.2P;G f=n.1g;1h(G i=h.1o;--i>=0;)F(h[i]==f)18;F(d&&d.7W){F(--i<0)i=h.1o-1}O F(++i>=h.1o)i=0;G o=h[i];n.1g=o;p.3P();Q;14 0:F((1m p.2I=="N")&&p.2I(l,l.1s(),l.1q(),l.1w())){Q 17}18}F(!l.4w(p.1c)){p.1p(l);g=1f}O F(n.1k==0)g=j=1f}F(g){d&&p.3o()}F(j){E.1j(n,"1t");d&&p.2L()}};E.1a.4B=N(u){G z=X;F(!u){z=1b.2X("20")[0];J.1R=1f}O{z=u;J.1R=17}J.1c=J.5b?1d 16(J.5b):1d 16();G q=E.1e("2E");J.2E=q;q.7U=0;q.7T=0;q.1x=J;E.1C(q,"3w",E.6q);G v=E.1e("1K");J.1u=v;v.19="1x";F(J.1R){v.1l.2F="5U";v.1l.1H="2i"}v.2g(q);G r=E.1e("7R",q);G C=X;G A=X;G w=J;G B=N(a,b,c){C=E.1e("1Z",A);C.3J=b;C.19="3p";F(c!=0&&2m.6s(c)<=2)C.19+=" 7P";E.2u(C);C.1x=w;C.1k=c;C.1g="<1K 5m=\'2Q\'>"+a+"</1K>";Q C};A=E.1e("2n",r);G p=6;(J.1R)&&--p;(J.1A)&&++p;B("?",1,4S).1r=E.1n["7M"];J.2o=B("",p,3K);J.2o.19="2o";F(J.1R){J.2o.1r=E.1n["5Q"];J.2o.1l.5P="5O";B("&#7K;",1,6f).1r=E.1n["7J"]}A=E.1e("2n",r);A.19="7I";J.4r=B("&#7H;",1,-2);J.4r.1r=E.1n["7G"];J.4o=B("&#7F;",1,-1);J.4o.1r=E.1n["7D"];J.4n=B(E.1n["7C"],J.1A?4:3,0);J.4n.1r=E.1n["7B"];J.4l=B("&#7A;",1,1);J.4l.1r=E.1n["7z"];J.4k=B("&#7y;",1,2);J.4k.1r=E.1n["7u"];A=E.1e("2n",r);A.19="7t";F(J.1A){C=E.1e("1Z",A);C.19="5J 5I";C.1g=E.1n["7s"]}1h(G i=7;i>0;--i){C=E.1e("1Z",A);F(!i){C.1k=25;C.1x=J;E.2u(C)}}J.57=(J.1A)?A.3e.2R:A.3e;J.4g();G D=E.1e("3R",q);J.3R=D;1h(i=6;i>0;--i){A=E.1e("2n",D);F(J.1A){C=E.1e("1Z",A)}1h(G j=7;j>0;--j){C=E.1e("1Z",A);C.1x=J;E.2u(C)}}F(J.2c){A=E.1e("2n",D);A.19="3y";C=E.1e("1Z",A);C.19="3y";C.3J=2;C.1g=E.1n["7q"]||"&4f;";C=E.1e("1Z",A);C.19="3y";C.3J=J.1A?4:3;(N(){N 3x(d,b,c,a){G e=E.1e("5G",C);e.19=d;e.1g=b;e.1x=w;e.1r=E.1n["7n"];e.1k=50;e.2P=[];F(1m c!="6y")e.2P=c;O{1h(G i=c;i<=a;++i){G f;F(i<10&&a>=10)f=\'0\'+i;O f=\'\'+i;e.2P[e.2P.1o]=f}}E.2u(e);Q e};G j=w.1c.2t();G o=w.1c.2s();G g=!w.3F;G n=(j>12);F(g&&n)j-=12;G H=3x("7k",j,g?1:0,g?12:23);G l=E.1e("5G",C);l.1g=":";l.19="7j";G M=3x("7i",o,0,59);G k=X;C=E.1e("1Z",A);C.19="3y";C.3J=2;F(g)k=3x("7h",n?"2z":"2v",["2v","2z"]);O C.1g="&4f;";w.4d=N(){G a,j=J.1c.2t(),o=J.1c.2s();F(g){a=(j>=12);F(a)j-=12;F(j==0)j=12;k.1g=a?"2z":"2v"}H.1g=(j<10)?("0"+j):j;M.1g=(o<10)?("0"+o):o};w.3P=N(){G a=J.1c;G h=1E(H.1g,10);F(g){F(/2z/i.1F(k.1g)&&h<12)h+=12;O F(/2v/i.1F(k.1g)&&h==12)h=0}G d=a.1w();G m=a.1q();G y=a.1s();a.7g(h);a.7f(1E(M.1g,10));a.1J(y);a.1T(m);a.1p(d);J.2e=17;J.3o()}})()}O{J.4d=J.3P=N(){}}G x=E.1e("7e",q);A=E.1e("2n",x);A.19="7d";C=B(E.1n["6h"],J.1A?8:7,3K);C.19="1r";F(J.1R){C.1r=E.1n["5Q"];C.1l.5P="5O"}J.4Y=C;v=E.1e("1K",J.1u);J.2N=v;v.19="5y";1h(i=0;i<E.2r.1o;++i){G s=E.1e("1K");s.19=E.1z?"3A-5w":"3A";s.2B=i;s.1g=E.3G[i];v.2g(s)}v=E.1e("1K",J.1u);J.3O=v;v.19="5y";1h(i=12;i>0;--i){G t=E.1e("1K");t.19=E.1z?"3A-5w":"3A";v.2g(t)}J.2G(J.2b,J.1c);z.2g(J.1u)};E.2S=N(c){G b=1i.2y;F(!b||b.1v)Q 17;(E.1z)&&(c=1i.1M);G e=(E.1z||c.5S=="4c"),K=c.79;F(c.78){2f(K){14 37:e&&E.1O(b.4o);18;14 38:e&&E.1O(b.4r);18;14 39:e&&E.1O(b.4l);18;14 40:e&&E.1O(b.4k);18;5z:Q 17}}O 2f(K){14 32:E.1O(b.4n);18;14 27:e&&b.2L();18;14 37:14 38:14 39:14 40:F(e){G d,x,y,1X,49,2H;d=K==37||K==38;2H=(K==37||K==39)?1:7;N 3u(){49=b.1W;G p=49.5u;x=p&15;y=p>>4;1X=b.2d[y][x]};3u();N 47(){G a=1d 16(b.1c);a.1p(a.1w()-2H);b.1p(a)};N 4h(){G a=1d 16(b.1c);a.1p(a.1w()+2H);b.1p(a)};3k(1){2f(K){14 37:F(--x>=0)1X=b.2d[y][x];O{x=6;K=38;2V}18;14 38:F(--y>=0)1X=b.2d[y][x];O{47();3u()}18;14 39:F(++x<7)1X=b.2d[y][x];O{x=0;K=40;2V}18;14 40:F(++y<b.2d.1o)1X=b.2d[y][x];O{4h();3u()}18}18}F(1X){F(!1X.1I)E.1O(1X);O F(d)47();O 4h()}}18;14 13:F(e)E.1O(b.1W,c);18;5z:Q 17}Q E.1P(c)};E.1a.2G=N(m,d){G f=1d 16(),5r=f.1s(),5H=f.1q(),5p=f.1w();J.2E.1l.2h="2D";G q=d.1s();F(q<J.2l){q=J.2l;d.1J(q)}O F(q>J.2k){q=J.2k;d.1J(q)}J.2b=m;J.1c=1d 16(d);G c=d.1q();G a=d.1w();G b=d.4U();d.1p(1);G g=(d.3z()-J.2b)%7;F(g<0)g+=7;d.1p(-g);d.1p(d.1w()+1);G s=J.3R.3e;G o=E.3G[c];G k=J.2d=1d 2K();G l=E.1n["5o"];G t=J.1v?(J.46={}):X;1h(G i=0;i<6;++i,s=s.2R){G u=s.3e;F(J.1A){u.19="4i 5I";u.1g=d.45();u=u.2R}s.19="72";G e=17,21,5M=k[i]=[];1h(G j=0;j<7;++j,u=u.2R,d.1p(21+1)){21=d.1w();G r=d.3z();u.19="4i";u.5u=i<<4|j;5M[j]=u;G n=(d.1q()==c);F(!n){F(J.3j){u.19+=" 71";u.3I=1f}O{u.19="70";u.1g="&4f;";u.1I=1f;2V}}O{u.3I=17;e=1f}u.1I=17;u.1g=J.3f?J.3f(d,21):21;F(t)t[d.2a("%Y%m%d")]=u;F(J.2I){G h=J.2I(d,q,c,21);F(J.3r){G p=J.3r(d,q,c,21);F(p)u.2o=p}F(h===1f){u.19+=" 1I";u.1I=1f}O{F(/1I/i.1F(h))u.1I=1f;u.19+=" "+h}}F(!u.1I){u.3l=1d 16(d);u.1r="6i";F(!J.1v&&n&&21==a&&J.6u){u.19+=" 2O";J.1W=u}F(d.1s()==5r&&d.1q()==5H&&21==5p){u.19+=" 6Z";u.1r+=E.1n["6Y"]}F(l.5l(r.6F())!=-1)u.19+=u.3I?" 6X":" 5k"}}F(!(e||J.3j))s.19="6W"}J.2o.1g=E.2r[c]+", "+q;J.4d();J.2E.1l.2h="7N";J.5j()};E.1a.5j=N(){F(J.1v){1h(G i 66 J.1v){G a=J.46[i];G d=J.1v[i];F(!d)2V;F(a)a.19+=" 2O"}}};E.1a.6g=N(b){F(J.1v){G a=b.2a("%Y%m%d");G c=J.46[a];F(c){G d=J.1v[a];F(!d){E.1G(c,"2O");J.1v[a]=b}O{E.1j(c,"2O");6U J.1v[a]}}}};E.1a.6T=N(a){J.3r=a};E.1a.1p=N(a){F(!a.4w(J.1c)){J.2G(J.2b,a)}};E.1a.5D=N(){J.2G(J.2b,J.1c)};E.1a.5Y=N(a){J.2G(a,J.1c);J.4g()};E.1a.4L=E.1a.6S=N(a){J.2I=a};E.1a.4R=N(a,z){J.2l=a;J.2k=z};E.1a.3o=N(){F(J.4s){J.4s(J,J.1c.2a(J.3s))}};E.1a.2L=N(){F(J.2Y){J.2Y(J)}J.2M()};E.1a.6R=N(){G a=J.1u.1y;a.43(J.1u);E.1D=X;1i.2y=X};E.1a.6Q=N(a){G b=J.1u;b.1y.43(b);a.2g(b)};E.4t=N(a){G b=1i.2y;F(!b){Q 17}G c=E.1z?E.2q(a):E.2U(a);1h(;c!=X&&c!=b.1u;c=c.1y);F(c==X){1i.2y.2L();Q E.1P(a)}};E.1a.4y=N(){G b=J.2E.2X("2n");1h(G i=b.1o;i>0;){G a=b[--i];E.1j(a,"3n");G c=a.2X("1Z");1h(G j=c.1o;j>0;){G d=c[--j];E.1j(d,"1t");E.1j(d,"26")}}J.1u.1l.1H="36";J.2D=17;F(J.1R){1i.2y=J;E.1C(1b,"5i",E.2S);E.1C(1b,"4c",E.2S);E.1C(1b,"3w",E.4t)}J.2M()};E.1a.4m=N(){F(J.1R){E.1V(1b,"5i",E.2S);E.1V(1b,"4c",E.2S);E.1V(1b,"3w",E.4t)}J.1u.1l.1H="2i";J.2D=1f;J.2M()};E.1a.3t=N(x,y){G s=J.1u.1l;s.2j=x+"1Q";s.3c=y+"1Q";J.4y()};E.1a.5A=N(f,g){G e=J;G p=E.2p(f);F(!g||1m g!="65"){J.3t(p.x,p.y+f.1Y);Q 1f}N 5W(b){F(b.x<0)b.x=0;F(b.y<0)b.y=0;G a=1b.1e("1K");G s=a.1l;s.2F="5U";s.6O=s.6N=s.42=s.4x="6M";1b.20.2g(a);G c=E.2p(a);1b.20.43(a);F(E.1z){c.y+=1b.20.35;c.x+=1b.20.3a}O{c.y+=1i.5h;c.x+=1i.5g}G d=b.x+b.42-c.x;F(d>0)b.x-=d;d=b.y+b.4x-c.y;F(d>0)b.y-=d};J.1u.1l.1H="36";E.4C=N(){G w=e.1u.1L;G h=e.1u.1Y;e.1u.1l.1H="2i";G b=g.22(0,1);G a="l";F(g.1o>1){a=g.22(1,1)}2f(b){14"T":p.y-=h;18;14"B":p.y+=f.1Y;18;14"C":p.y+=(f.1Y-h)/2;18;14"t":p.y+=f.1Y-h;18;14"b":18}2f(a){14"L":p.x-=w;18;14"R":p.x+=f.1L;18;14"C":p.x+=(f.1L-w)/2;18;14"l":p.x+=f.1L-w;18;14"r":18}p.42=w;p.4x=h+40;e.2N.1l.1H="2i";5W(p);e.3t(p.x,p.y)};F(E.3D)52("E.4C()",10);O E.4C()};E.1a.4I=N(a){J.3s=a};E.1a.89=N(a){J.4H=a};E.1a.3T=N(a,b){F(!b)b=J.3s;J.1p(16.3T(a,b))};E.1a.2M=N(){F(!E.1z&&!E.68)Q;N 3Y(a){G b=a.1l.2h;F(!b){F(1b.4z&&1m(1b.4z.5f)=="N"){F(!E.3D)b=1b.4z.5f(a,"").6K("2h");O b=\'\'}O F(a.5e){b=a.5e.2h}O b=\'\'}Q b};G c=1d 2K("6J","6H","8h");G q=J.1u;G p=E.2p(q);G m=p.x;G o=q.1L+m;G d=p.y;G e=q.1Y+d;1h(G k=c.1o;k>0;){G l=1b.2X(c[--k]);G n=X;1h(G i=l.1o;i>0;){n=l[--i];p=E.2p(n);G f=p.x;G g=n.1L+f;G h=p.y;G j=n.1Y+h;F(J.2D||(f>o)||(g<m)||(h>e)||(j<d)){F(!n.3d){n.3d=3Y(n)}n.1l.2h=n.3d}O{F(!n.3d){n.3d=3Y(n)}n.1l.2h="2D"}}}};E.1a.4g=N(){G c=J.2b;G d=J.57;G b=E.1n["5o"];1h(G i=0;i<7;++i){d.19="4i 5J";G a=(i+c)%7;F(i){d.1r=E.1n["6G"].5d("%s",E.4X[a]);d.1k=25;d.1x=J;d.5X=a;E.2u(d)}F(b.5l(a.6F())!=-1){E.1G(d,"5k")}d.1g=E.3L[(i+c)%7];d=d.2R}};E.1a.6t=N(){J.2N.1l.1H="2i";J.3O.1l.1H="2i"};E.1a.6m=N(c){F(J.2W){Q}J.2W=1f;G a;G b;F(E.1z){b=1i.1M.55+1b.20.35;a=1i.1M.3S+1b.20.3a}O{b=c.55+1i.5h;a=c.3S+1i.5g}G d=J.1u.1l;J.6o=a-1E(d.2j);J.6n=b-1E(d.3c);2A(E){1C(1b,"3b",56);1C(1b,"3U",53)}};16.6E=1d 2K(31,28,31,30,31,30,31,31,30,31,30,31);16.6D=6C;16.6B=60*16.6D;16.6z=60*16.6B;16.4O=24*16.6z;16.8P=7*16.4O;16.3T=N(f,h){G e=1d 16();G y=0;G m=-1;G d=0;G a=f.5N(/\\W+/);G b=h.4D(/%./g);G i=0,j=0;G c=0;G g=0;1h(i=0;i<a.1o;++i){F(!a[i])2V;2f(b[i]){14"%d":14"%e":d=1E(a[i],10);18;14"%m":m=1E(a[i],10)-1;18;14"%Y":14"%y":y=1E(a[i],10);(y<25)&&(y+=(y>29)?4q:6x);18;14"%b":14"%B":1h(j=0;j<12;++j){F(E.2r[j].22(0,a[i].1o).3H()==a[i].3H()){m=j;18}}18;14"%H":14"%I":14"%k":14"%l":c=1E(a[i],10);18;14"%P":14"%p":F(/2z/i.1F(a[i])&&c<12)c+=12;O F(/2v/i.1F(a[i])&&c>=12)c-=12;18;14"%M":g=1E(a[i],10);18}}F(3i(y))y=e.1s();F(3i(m))m=e.1q();F(3i(d))d=e.1w();F(3i(c))c=e.2t();F(3i(g))g=e.2s();F(y!=0&&m!=-1&&d!=0)Q 1d 16(y,m,d,c,g,0);y=0;m=-1;d=0;1h(i=0;i<a.1o;++i){F(a[i].8N(/[a-8M-Z]+/)!=-1){G t=-1;1h(j=0;j<12;++j){F(E.2r[j].22(0,a[i].1o).3H()==a[i].3H()){t=j;18}}F(t!=-1){F(m!=-1){d=m+1}m=t}}O F(1E(a[i],10)<=12&&m==-1){m=a[i]-1}O F(1E(a[i],10)>31&&y==0){y=1E(a[i],10);(y<25)&&(y+=(y>29)?4q:6x)}O F(d==0){d=a[i]}}F(y==0)y=e.1s();F(m!=-1&&d!=0)Q 1d 16(y,m,d,c,g,0);Q e};16.1a.4U=N(a){G b=J.1s();F(1m a=="1B"){a=J.1q()}F(((0==(b%4))&&((0!=(b%25))||(0==(b%4S))))&&a==1){Q 29}O{Q 16.6E[a]}};16.1a.6w=N(){G c=1d 16(J.1s(),J.1q(),J.1w(),0,0,0);G a=1d 16(J.1s(),0,0,0,0,0);G b=c-a;Q 2m.3Q(b/16.4O)};16.1a.45=N(){G d=1d 16(J.1s(),J.1q(),J.1w(),0,0,0);G a=d.3z();d.1p(d.1w()-(a+6)%7+3);G b=d.6v();d.1T(0);d.1p(4);Q 2m.8L((b-d.6v())/(7*8K))+1};16.1a.4w=N(a){Q((J.1s()==a.1s())&&(J.1q()==a.1q())&&(J.1w()==a.1w())&&(J.2t()==a.2t())&&(J.2s()==a.2s()))};16.1a.4W=N(b){G a=1d 16(b);J.1p(1);J.1J(a.1s());J.1T(a.1q());J.1p(a.1w())};16.1a.2a=N(g){G m=J.1q();G d=J.1w();G y=J.1s();G f=J.45();G w=J.3z();G s={};G e=J.2t();G n=(e>=12);G j=(n)?(e-12):e;G b=J.6w();F(j==0)j=12;G l=J.2s();G h=J.8J();s["%a"]=E.3L[w];s["%A"]=E.4X[w];s["%b"]=E.3G[m];s["%B"]=E.2r[m];s["%C"]=1+2m.3Q(y/25);s["%d"]=(d<10)?("0"+d):d;s["%e"]=d;s["%H"]=(e<10)?("0"+e):e;s["%I"]=(j<10)?("0"+j):j;s["%j"]=(b<25)?((b<10)?("8I"+b):("0"+b)):b;s["%k"]=e;s["%l"]=j;s["%m"]=(m<9)?("0"+(1+m)):(1+m);s["%M"]=(l<10)?("0"+l):l;s["%n"]="\\n";s["%p"]=n?"8H":"8G";s["%P"]=n?"2z":"2v";s["%s"]=2m.3Q(J.8F()/6C);s["%S"]=(h<10)?("0"+h):h;s["%t"]="\\t";s["%U"]=s["%W"]=s["%V"]=(f<10)?("0"+f):f;s["%u"]=w+1;s["%w"]=w;s["%y"]=(\'\'+y).22(2,2);s["%Y"]=y;s["%%"]="%";G c=/%./g;F(!E.4J&&!E.3D)Q g.5d(c,N(a){Q s[a]||a});G a=g.4D(c);1h(G i=0;i<a.1o;i++){G k=s[a[i]];F(k){c=1d 8E(a[i],\'g\');g=g.5d(c,k)}}Q g};16.1a.5a=16.1a.1J;16.1a.1J=N(y){G d=1d 16(J);d.5a(y);F(d.1q()!=J.1q())J.1p(28);J.5a(y)};1i.2y=X;',62,548,'||||||||||||||||||||||||||||||||||||||||Calendar|if|var|||this||||function|else||return|||||||null|||||||case||Date|false|break|className|prototype|document|date|new|createElement|true|innerHTML|for|window|removeClass|navtype|style|typeof|_TT|length|setDate|getMonth|ttip|getFullYear|hilite|element|multiple|getDate|calendar|parentNode|is_ie|weekNumbers|undefined|addEvent|_C|parseInt|test|addClass|display|disabled|setFullYear|div|offsetWidth|event|timeout|cellClick|stopEvent|px|isPopup|hilitedYear|setMonth|hilitedMonth|removeEvent|currentDateEl|ne|offsetHeight|td|body|iday|substr|||100|active||||print|firstDayOfWeek|showsTime|ar_days|dateClicked|switch|appendChild|visibility|none|left|maxYear|minYear|Math|tr|title|getAbsolutePos|getElement|_MN|getMinutes|getHours|_add_evs|am|activeDiv|onSelect|_dynarch_popupCalendar|pm|with|month|log|hidden|table|position|_init|step|getDateStatus|year|Array|callCloseHandler|hideShowCovered|monthsCombo|selected|_range|on|nextSibling|_keyEvent|flat|getTargetElement|continue|dragging|getElementsByTagName|onClose|range||||offsetLeft|ifFormat|scrollTop|block||||scrollLeft|mousemove|top|__msh_save_visibility|firstChild|getDateText|userAgent|navigator|isNaN|showsOtherMonths|while|caldate|tableMouseOver|rowhilite|callHandler|button|get|getDateToolTip|dateFormat|showAt|setVars|yearStep|mousedown|makeTimePart|time|getDay|label|jQuery|mouseover|is_khtml|tableMouseUp|time24|_SMN|toLowerCase|otherMonth|colSpan|300|_SDN|activeYear|activeMonth|yearsCombo|onUpdateTime|floor|tbody|clientX|parseDate|mouseup|dynDateTime|displayArea|opts|getVisib|err||onUpdate|width|removeChild|daFormat|getWeekNumber|datesCells|prevMonth|flatCallback|el|try|console|keypress|onSetTime|eval|nbsp|_displayWeekdays|nextMonth|day|findMonth|_nav_ny|_nav_nm|hide|_nav_now|_nav_pm|findYear|1900|_nav_py|onSelected|_checkCalendar|catch|offsetTop|equalsTo|height|show|defaultView|ST|create|continuation_for_the_fucking_khtml_browser|match|to|showYearsCombo|showOthers|ttDateFormat|setDateFormat|is_ie5|you|setDateStatusHandler|clearTimeout|firstDay|DAY|isRelated|and|setRange|400|dateText|getMonthDays|_SMN_len|setDateOnly|_DN|tooltips|dateStatusFunc||_SDN_len|setTimeout|calDragEnd|timeFormat|clientY|calDragIt|firstdayname|value||__msh_oldSetFullYear|dateStr|fn|replace|currentStyle|getComputedStyle|scrollX|scrollY|keydown|_initMultipleDates|weekend|indexOf|unselectable|dayMouseDblClick|WEEKEND|TD|dayMouseOut|TY|dayMouseDown|dayMouseOver|pos|http|IEfix|createElementNS|combo|default|showAtElement|removeEventListener|detachEvent|refresh|addEventListener|attachEvent|span|TM|wn|name|nodeType|srcElement|dpos|split|move|cursor|DRAG_TO_MOVE|mouseout|type|showMonthsCombo|absolute|offsetParent|fixPosition|fdow|setFirstDayOfWeek|debug||tagName|com|it|align|string|in|the|is_opera|cache|opera|language|into|defaults|msie|200|_toggleMultipleDate|SEL_DATE|_|electric|eventName|250|_dragStart|yOffs|xOffs|onchange|tableMouseDown|_current|abs|_hideCombos|hiliteToday|valueOf|getDayOfYear|2000|number|HOUR|singleClick|MINUTE|1000|SECOND|_MD|toString|DAY_FIRST|iframe|TT_DATE_FORMAT|applet|getPropertyValue|DEF_DATE_FORMAT|0px|bottom|right|2050|reparent|destroy|setDisabledHandler|setDateToolTipHandler|delete|1970|emptyrow|oweekend|PART_TODAY|today|emptycell|othermonth|daysrow|setAttribute|dblclick|xhtml|1999|org|ctrlKey|keyCode|w3|www|loadFirebugConsole|footrow|tfoot|setMinutes|setHours|ampm|minute|colon|hour|stopPropagation|preventDefault|TIME_PART|returnValue|cancelBubble|TIME|target|WK|daynames|NEXT_YEAR|currentTarget|each|2999|x00bb|NEXT_MONTH|x203a|GO_TODAY|TODAY|PREV_MONTH|join|x2039|PREV_YEAR|x00ab|headrow|CLOSE|x00d7|toElement|INFO|visible|extend|nav|fromElement|thead|relatedTarget|cellPadding|cellSpacing|clicked|shiftKey|alert|epl|mishoo|Br|dynarch|Thank|distribution|yahoo|mihai_bazon|back|send|js|setTtDateFormat|en|KHTML|rar|subdir|Safari|lang|Konqueror|select|file|corresponding|update|please|generous|feel|know|If|translated|not|is|text|click|box|about|Help|ABOUT_TIME|ABOUT|empty|selection|pageY|pageX|RegExp|getTime|AM|PM|00|getSeconds|864e5|round|zA|search|_FD|WEEK'.split('|'),0,{}))

/*CALENDAR RU*/
Calendar._DN = new Array
("воскресенье",
 "понедельник",
 "вторник",
 "среда",
 "четверг",
 "пятница",
 "суббота",
 "воскресенье");

Calendar._SDN = new Array
("вск",
 "пон",
 "втр",
 "срд",
 "чет",
 "пят",
 "суб",
 "вск");

Calendar._FD = 0;

Calendar._MN = new Array
("январь",
 "февраль",
 "март",
 "апрель",
 "май",
 "июнь",
 "июль",
 "август",
 "сентябрь",
 "октябрь",
 "ноябрь",
 "декабрь");

// short month names
Calendar._SMN = new Array
("янв",
 "фев",
 "мар",
 "апр",
 "май",
 "июн",
 "июл",
 "авг",
 "сен",
 "окт",
 "ноя",
 "дек");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "О календаре...";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"Как выбрать дату:\n" +
"- При помощи кнопок \xab, \xbb можно выбрать год\n" +
"- При помощи кнопок " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " можно выбрать месяц\n" +
"- Подержите эти кнопки нажатыми, чтобы появилось меню быстрого выбора.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Как выбрать время:\n" +
"- При клике на часах или минутах они увеличиваются\n" +
"- при клике с нажатой клавишей Shift они уменьшаются\n" +
"- если нажать и двигать мышкой влево/вправо, они будут меняться быстрее.";

Calendar._TT["PREV_YEAR"] = "На год назад (удерживать для меню)";
Calendar._TT["PREV_MONTH"] = "На месяц назад (удерживать для меню)";
Calendar._TT["GO_TODAY"] = "Сегодня";
Calendar._TT["NEXT_MONTH"] = "На месяц вперед (удерживать для меню)";
Calendar._TT["NEXT_YEAR"] = "На год вперед (удерживать для меню)";
Calendar._TT["SEL_DATE"] = "Выберите дату";
Calendar._TT["DRAG_TO_MOVE"] = "Перетаскивайте мышкой";
Calendar._TT["PART_TODAY"] = " (сегодня)";

Calendar._TT["DAY_FIRST"] = "Первый день недели будет %s";

Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "Закрыть";
Calendar._TT["TODAY"] = "Сегодня";
Calendar._TT["TIME_PART"] = "(Shift-)клик или нажать и двигать";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%e %b, %a";

Calendar._TT["WK"] = "нед";
Calendar._TT["TIME"] = "Время:";

/*COOKIE*/
jQuery.cookie = function (key, value, options) {
    
    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        
        value = String(value);
        
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};


/*DIALOG*/
/**
 * объект для работы с диалоговом окном,
 * информирующем об ошибках и прочей информации
 * @param string text      текст сообщения
 * @param string attrClass css класс, 
 * который будет применен к тексту сообщения (example: dialog_error, dialog_info etc.)
 */
function Dialog(o) {	
	this.timeShow    = 3000;
	this.animateTime = 100;
	this.o = o || {}
	
	this.disableAllButtons = true;
	
	$('body').prepend($('<div class="dialog"><div class="dialog_text"></div></div>'));
	
	this.element = $('.dialog').css('cursor', 'pointer').attr('title', 'Закрыть');
	this.window  = $(window);
	this.infoBox = $('.dialog .dialog_text');
    
	var self = this;
	this.element.bind('click', function () {
		self.hide();
	})
	
    this.window.size = [this.window.width(), 
                        this.window.height()];    
}
/**
 * отображает диалоговое окно
 */
Dialog.prototype.show = function(text, attrClass, callback) {
    this.infoBox.addClass(attrClass).text(text);
    this.element.size = [this.element.width(), 
                         this.element.height()]; 
    
	if(this.element.is(':visible') == false) {
		
		if (this.disableAllButtons) {
			this._disableAllButtons();
		}
				
		this.element.css({
         	top: this.element.size[1] * -1, 
           	left: Math.floor(this.window.size[0] / 2) - 
           		  Math.floor(this.element.size[0] / 2)
        }).show();
        		
		if (this.o.type == 'animate') {
			this.element.animate({
		        top: Math.floor(this.window.size[1] / 2) - 
		             Math.floor(this.element.size[1] / 2)
		    }, this.animateTime);			
		} else if (this.o.type == 'opacity') {
			this.element.css({
		        top: Math.floor(this.window.size[1] / 2) - 
		             Math.floor(this.element.size[1] / 2),
		        opacity: 0
		    });
			this.element.animate({
				opacity: 1
			}, this.animateTime);
		}		
		
		$('#anonsdpua').animate({
			opacity: .5
		}, this.animateTime);		
		
		var self = this;
	    setTimeout(function() {
	      	self.hide();
	      	if (typeof(callback) == 'function') {
	      		callback();
	      	}
	    }, this.timeShow);
	}	
}
/**
 * скрывает диалоговое окно
 */
Dialog.prototype.hide = function() {
	if (this.disableAllButtons) {
		this._enableAllButtons();
	}
	
	var self = this;
	
	if (this.o.type == 'animate') {
		this.element.animate({
	        top: this.element.size[1] * -1
	    }, this.animateTime, function() {
	        self.element.hide();
	    });		
	} else if (this.o.type == 'opacity') {
		this.element.animate({
	        opacity: 0
	    }, this.animateTime, function() {
	        self.element.hide();
	    });		
	}
	
	$('#anonsdpua').animate({
		opacity: 1
	}, this.animateTime);	
}
/**
 * делает неактивными все кнопки на странице
 */
Dialog.prototype._disableAllButtons = function() {
	$(":button, :submit").attr('disabled', 'disabled');
}
/**
 * делает активными все кнопки на странице
 */
Dialog.prototype._enableAllButtons = function() {
	$(":button, :submit").removeAttr('disabled');
}


/*HIGHLIGHT*/
jQuery.fn.highlight = function(pat) {
 function innerHighlight(node, pat) {
  var skip = 0;
  if (node.nodeType == 3) {
   var pos = node.data.toUpperCase().indexOf(pat);
   if (pos >= 0) {
    var spannode = document.createElement('span');
    spannode.className = 'highlight';
    var middlebit = node.splitText(pos);
    var endbit = middlebit.splitText(pat.length);
    var middleclone = middlebit.cloneNode(true);
    spannode.appendChild(middleclone);
    middlebit.parentNode.replaceChild(spannode, middlebit);
    skip = 1;
   }
  }
  else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
   for (var i = 0; i < node.childNodes.length; ++i) {
    i += innerHighlight(node.childNodes[i], pat);
   }
  }
  return skip;
 }
 return this.each(function() {
	 if (pat == '') return;
	 var arr = pat.split(' ');
	  for (var i = 0; i < arr.length; i++ ) {
		  innerHighlight(this, arr[i].toUpperCase());  
	  }
 });
};

jQuery.fn.removeHighlight = function() {
 return this.find("span.highlight").each(function() {
  this.parentNode.firstChild.nodeName;
  with (this.parentNode) {
   replaceChild(this.firstChild, this);
   normalize();
  }
 }).end();
};


/*SCROLLTO*/
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/*AJAX LOAD*/
// Copyright (c) 2008 Andris Valums, http://valums.com
// Licensed under the MIT license (http://valums.com/mit-license/)
// Thanks to Loic Fontaine, Mark Feldman, Andras Popovics, Faisal for contribution
/*
Changelog:
Version 0.6 - Fixed bugs:
	1. Disabling button while uploading resulted in empty upload
	2. Submitting empty file input in Chrome, when user clicked cancel
 */
(function($){
	// we need jQuery to run
	if ( ! $) return;

	$.ajax_upload = function(button, options){
		// make sure it is jquery object
		button = $(button);

		if (button.size() != 1 ){
			console.error('You passed ', button.size(),' elements to ajax_upload at once');
			return false;
		}

		return new Ajax_upload(button, options);
	};


	/**
	 * Function generates unique id
	 * @return unique id
	 */
	var get_uid = function(){
		var uid = 0;
		return function(){
			return uid++;
		}
	}();

	/**
	 * @param button Element that will be used as file upload button
	 * @param option User options
	 */
	var Ajax_upload = function(button, options){
		this.button = button;

		this.wrapper = null;
		this.form = null;
		this.input = null;
		this.iframe = null;

		this.disabled = false;
		this.submitting = false;

		this.settings = {
			// Location of the server-side upload script
			action: 'upload.php',
			// File upload name
			name: 'userfile',
			// Additional data to send
			data: {},
			// Fired when user selects file
			// You can return false to cancel upload
			onSubmit: function(file, extension) {},
			// Fired when file upload is completed
			onComplete: function(file, response) {},
			// Fired when server returns the "success" string
			onSuccess: function(file){},
			// Fired when server return something else
			onError: function(file, response){}
		};

		// Merge the users options with our defaults
		$.extend(this.settings, options);

		this.create_wrapper();
		this.create_input();

		if (jQuery.browser.msie){
			// fix ie transparent background bug
			this.make_parent_opaque();
		}

		this.create_iframe();
	}
	// assigning methods to our class
	Ajax_upload.prototype = {
		set_data : function(data){
			this.settings.data = data;
		},
		disable : function(){
			this.disabled = true;
			if ( ! this.submitting){
				this.input.attr('disabled', true);
			}
		},
		enable : function(){
			this.disabled = false;
			this.input.attr('disabled', false);
		},
		/**
		 * Creates wrapper for button and invisible file input
		 */
		create_wrapper : function(){
			// Shorten names
			var button = this.button, wrapper;

			wrapper = this.wrapper = $('<div></div>')
				.insertAfter(button)
				.append(button);

			// wait a bit because of FF bug
			// it can't properly calculate the outerHeight
			setTimeout(function(){
				wrapper.css({
					position: 'relative'
					,display: 'inline-block'
					/*,overflow: 'hidden'

					,height: button.outerHeight(true)
					,width: button.outerWidth(true)*/
				});
			}, 1);

			var self = this;
			wrapper.mousemove(function(e){
				// Move the input with the mouse, so the user can't misclick it
				if (!self.input) {
					return;
				}

				self.input.css({
					top: e.pageY - wrapper.offset().top - 5 + 'px'
					,left: e.pageX - wrapper.offset().left - 170 + 'px'
				});
			});


		},
		/**
		 * Creates invisible file input above the button
		 */
		create_input : function(){
			var self = this;

			this.input =
				$('<input type="file" />')
				.attr('name', this.settings.name)
				.css({
					'position' : 'absolute'
					,'margin': 0
					,'padding': 0
					,'width': '220px'
					,'heigth': '10px'
					,'opacity': 0
					,'cursor': 'pointer'
				})
				.change(function(){
					if ($(this).val() == ''){
						// there is no file
						return;
					}

					// we need to lock "disable" method
					self.submitting = true;

					// Submit form when value is changed
					self.submit();

					// unlock "disable" method
					self.submitting = false;
				})
				.appendTo(this.wrapper)

				//
				.hover(
					function(){self.button.addClass('hover');}
					,function(){self.button.removeClass('hover');}
				);

			if (this.disabled){
				this.input.attr('disabled', true);
			}

		},
		/**
		 *
		 */
		create_iframe : function(){
			//
			//     getTime,
			//    : (
			var name = 'iframe_au' + get_uid();

			//  ,   Dont
			this.iframe =
				$('<iframe name="' + name + '"></iframe>')
				.css('display', 'none')
				.appendTo('body');
		},
		/**

		 */
		submit : function(){
			var self = this, settings = this.settings;

			//
			var file = this.file_from_path(this.input.val());

			//
			if (settings.onSubmit.call(this, file, this.get_ext(file)) === false){
				// Do not continue if user function returns false
				if (self.disabled){
					this.input.attr('disabled', true);
				}
				return;
			}

			this.create_form();
			this.input.appendTo(this.form);
			this.form.submit();

			this.input.remove(); this.input = null;
			this.form.remove();	this.form = null;

			this.submitting = false;

			//
			this.create_input();

			var iframe = this.iframe;
			iframe.load(function(){
				var response = iframe.contents().find('body').html();

				settings.onComplete.call(self, file, response);
				if (response == 'success'){
					settings.onSuccess.call(self, file);
				} else {
					settings.onError.call(self, file, response);
				}

				// CLEAR ( ,   FF2 )
				setTimeout(function(){
					iframe.remove();
				}, 1);
			});

			//   ,
			this.create_iframe();
		},
		/**
		 * 	 ,
		 */
		create_form : function(){
			// Enctype
			//    ATTR " "
			this.form =
				$('<form method="post" enctype="multipart/form-data"></form>')
				.appendTo('body')
				.attr({
					"action" : this.settings.action
					,"target" : this.iframe.attr('name')
				});

			//     ,
			for (var i in this.settings.data){
				$('<input type="hidden" />')
					.appendTo(this.form)
					.attr({
						'name': i
						,'value': this.settings.data[i]
					});
			}
		},
		file_from_path : function(file){
			var i = file.lastIndexOf('\\');
			if (i !== -1 ){
				return file.slice(i+1);
			}
			return file;
		},
		get_ext : function(file){
			var i = file.lastIndexOf('.');

			if (i !== -1 ){
				return file.slice(i+1);
			}
			return '';
		},
		make_parent_opaque : function(){
			// ie
			this.button.add(this.button.parents()).each(function(){
				var color = $(this).css('backgroundColor');
				var image = $(this).css('backgroundImage');

				if ( color != 'transparent' ||  image != 'none'){
					$(this).css('opacity', 1);
					return false;
				}
			});
		}

	};
})(jQuery);


/*SCRIPT*/
var host = 'http://' + window.location.host + '/',
	path_to_img = 'static.anons.local',
	img_attr = '?w=110&h=160&tc&ns',
	dialog, calendar, social_nets, user, lang = 'ru', login_dialog;

if (typeof use_filtering == undefined) {
	var use_filtering = false;
}

var toAnonsDate = function (date) {
	var arr = date.split(" "), date = arr[0].split('-'), time = arr[1].substr(0, 5);
	date = date[2] + " " + i18n.month.ru[parseInt(date[1])] + " " + date[0];
	return "<p>" + date + "</p><p><span class='time'>" + time + "</span></p>";
}

var i18n = {
	user_not_found: {
		ru: "Только для авторизированных пользователей"
	},
	event_not_found: {
		ru: "Извините, но что-то пошло не так!"
	},
	month: {
		ru: ['января', 'февраля', 'марта', 'апреля', 'майя', 'июня', 
		'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
	}
}

var Pagination = function (use_filtering) {
	this.Box = $('.wrapp');
	this.FilterBox = $('.filtering_box', this.Box);
	this.Button = $('.letters .hse');
	this.Filters = $('#tabs li', this.Box);
	this.Items = $('.place_line', this.Box);
	this.Pages = 1;
	this.ItemPerPage = items_per_page;
	this.PageNumber = $('#pag_number');
	this.useAjax = (typeof use_ajax === 'undefined' ? false : true);
	this.use_filtering = use_filtering || false;
	this.CACHE = {};

	this.hash = window.location.hash;	
	
	this.init = function () {
		this.initControls();
		this.Pages = Math.ceil(this.Items.size() / this.ItemPerPage);
		if (this.hash) {
			this.Button.removeClass('activ');
			var tmp = this.hash.replace('#', '');
			this.build(false);
			$('.letters li[class*=l-' + tmp + ']').click();
		} else {
			this.build(false);
		}

		if (this.use_filtering === true) this.setCache();
	}
	
	this.initControls = function () {
		var self = this;
		
		this.Button.click(function () {
			var letter = $(this).text();
			self.Button.removeClass('activ');
			$(this).addClass('activ');
			window.location.hash = $(this).text();
			self.build(letter);
		});
		
		this.Filters.click(function() {
			var el = $(this), type = el.attr('data-type');
			self.Filters.removeClass('activ');
			el.addClass('activ');
			self.filter(type);	
		});

		$('#pag_number span').live('click', function () {
			self.drawPages($(this).index());
		});
	}
	
	this.setCache = function () {
		var items_date = [], items_letter = {}, items_category = {};

		$.each(this.Items, function (i, item){
			var let = $(item).attr('data-letter').toString(),
				cat = $(item).attr('data-category').toString();

			if (typeof items_letter[let] == 'undefined') {
				items_letter[let] = [];
			}

			if (typeof items_category[cat] == 'undefined') {
				items_category[cat] = [];				
			}

			items_date[i] = $(item).parent()[0];

			items_letter[let].push($(item).parent());
			
			items_category[cat].push($(item).parent());
		});

		this.CACHE['date'] = items_date.sort(function(a, b){
			return parseInt($(a).attr('data-date')) - parseInt($(b).attr('data-date'))
		});

		this.CACHE['letter_desc'] = this.sorted(items_letter);
		this.CACHE['letter_asc'] = this.sorted(items_letter, true);
		this.CACHE['category'] = this.sorted(items_category);		
	}

	this.sorted = function (obj, reverse) {
		var keys = [], k, i, m, len, arr = [];
		reverse = reverse || (reverse = false)

		for (var k in obj) {
		    if (obj.hasOwnProperty(k)) {
		        keys.push(k);
		    }
		}

		if (reverse) {
			keys.reverse(k);	
		} else {
			keys.sort(k);
		}
		len = keys.length;

		for (i = 0; i < len; i++) {
		    k = keys[i];
		    for (m = 0; m < obj[k].length; m++) {
		    	arr.push(obj[k][m][0]);
		    }
		}

		return arr;
	}

	this.filter = function (type) {
		this.FilterBox.html(this.CACHE[type]);
		this.build(false);
		this.rankingClasses();
	}

	this.rankingClasses = function () {
		this.Items.removeClass('asm');
		$("div[class*=page-]:nth-child(even)").addClass("asm");
	}

	this.build = function (letter) {
		if (letter == 'ВСЕ') {
			this.Pages = Math.ceil(this.Items.size() / this.ItemPerPage);
			this.Letter = false;
			this.build(false);
		} else {
			this.Items.hide();
			var showed = (letter === false ? this.Items : $('[data-letter=' + letter + ']'));
			this.Pages = Math.ceil(showed.size() / this.ItemPerPage);
			this.Letter = letter;
			
			for (var i = 0; i < this.Pages; i++) {
				showed.slice((i * this.ItemPerPage), ((i + 1) * this.ItemPerPage)).attr('class', 'page-' + i);
			}
			
			showed.show();
		}
		
		this.drawPages(0);
	}
	
	this.drawPages = function(n) {
		if (this.useAjax) {
			this.ajax(n);	
		};

		this.PageNumber.empty();
		$('[class*=page-]').parent().hide();
		$('[class*=page-]').removeClass('asm');
		$('[class*=page-]').hide();
		
		this.PageNumber.hide();
		
		if (this.Pages > 1) {	
			this.PageNumber.show();
			for (var i = 0, span; i < this.Pages; i++ ) {
				span = $('<span/>')
				span.text((i + 1));
				this.PageNumber.append(span);
			}
			
			$('#pag_number span').removeClass('activ');
			$('#pag_number span').eq(n).addClass('activ');
		} 
		
		var Items = $('.page-' + n);
		
		if (this.Letter != false) {
			Items = $('.page-' + n + '[data-letter=' + this.Letter + ']');
		}
				
		Items.show();
		Items.parent().show();
		Items.parent().each(function (i) {
			var parent = $(this);
			if (i%2) {
				parent.removeClass('asm');
			} else {
				parent.addClass('asm');
			}
		});
	};

	this.ajax = function(page) {
		return;
		var self = this, page = page || 1;
		$.ajax({
				url: host + 'events/getAll',
				data: {page: page},
				type: "POST",
				success: function (data) {
					self.CACHE[page] = data;
				}
		})
	};
	
	this.init();
}




Date.prototype.toNormalDate = function () {
	var m = Number(this.getMonth()) + 1;
	var date = ((String(this.getDate()).length == 1) ? "0" + this.getDate() : this.getDate()) + '.' + ((String(m).length == 1) ? "0" + m : m) + '.' + this.getFullYear()
	return date;	
}

Date.prototype.toEventDate = function () {
	var m = Number(this.getMonth()) + 1;
	var date = this.getFullYear() + '-' + ((String(m).length == 1) ? "0" + m : m) + '-' + ((String(this.getDate()).length == 1) ? "0" + this.getDate() : this.getDate());
	return date;	
}

var MyCalendar = function () {
	this.Grid  = $('#grid');
	this.Title = $('.title_month');
	this.Success = false;
	this.DatesHasEvents = [];
	this.date = new Date();
	this.href = "events/day/";
	
	this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
	               'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	
	this.months_d = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
	               'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	
	this.init = function () {
		this.today = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()).getTime();
		this.maxDay = new Date(this.date.getFullYear(), this.date.getMonth(), (Number(this.date.getDate()) + 90));
		this.getEvents();
		this.fillTitle();
		this.fillGrid();
		this.initControls();
	}
	
	this.fillTitle = function () {
		var m = this.date.getMonth();
		this.Title.text(this.months[m] + ' ' + this.date.getFullYear())
	}
	
	this.fillGrid = function () {
		var date     = this.date,
			year     = date.getFullYear(), 					  
			month    = date.getMonth(), 					  
			first    = new Date(year, month, 1).getDay(),     	
			last     = new Date(year, month + 1, 0).getDate(),
			prev     = new Date(year, month, 0).getDate(),    
			i, Week, Day, data, title, m = month;
		
		this.Grid.html('');
	
		for (i = 1; i < 43; i += 1) {
			if ((i - 1) % 7 == 0) {
				Week = $("<tr/>");
				this.Grid.append(Week);
			}

			if (i < first) {
				date = new Date(year, month - 1, prev - first + i + 1);
				m = ((month - 1) < 0 ? 0 : (month - 1));
			} else if (i > last + first - 1) {
				m = ((month + 1) < 12 ? (month + 1) : 0);
				date = new Date(year, month, i - first + 1);
			} else if (first == 0) {
				date = new Date(year, month - 1, last - 6 + i);
				m = ((month - 1) < 0 ? 0 : (month - 1));
				if (i == 6) {
					first = 7;
				}
			} else {
				m = month;
				date = new Date(year, month, i - first + 1);
			}
			
			Day = $("<td date='" + date.toNormalDate() + "'>" + date.getDate() + "</td>");

			if (date.getMonth() > month || date.getMonth() < month) {
				Day.empty();
			} else if (date.getTime() == this.today) {
				if (this.DatesHasEvents.indexOf(String(String(date.getTime()).substr(0, 10))) != -1) {
					Day.html("<span class='current'><a title='События " + date.getDate() + ' ' + this.months_d[date.getMonth()] + "' href='" + host + this.href + date.toEventDate() + "'>" + date.getDate() + "</a></span>");
					Day.addClass('hasEvents');					
				} else {
					Day.html("<span class='current'>" + date.getDate() + "</span>");
				}
			} else if (date.getTime() < this.today) {
				Day.addClass('disable');
			} else if (this.DatesHasEvents.indexOf(String(String(date.getTime()).substr(0, 10))) != -1) {
				Day.html("<a title='События " + date.getDate() + ' ' + this.months_d[date.getMonth()] + "' href='" + host + this.href + date.toEventDate() + "'>" + date.getDate() + "</a>");
				Day.addClass('hasEvents');
			}
			
			Week.append(Day);
		}
	}
	
	this.initControls = function () {
		var self = this;
		$('.arrow.next').click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			self.date = new Date(self.date.getFullYear(), self.date.getMonth() + 1, 1);
			self.fillGrid();
			self.fillTitle();
		});
		
		$('.arrow.prev').click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			self.date = new Date(self.date.getFullYear(), self.date.getMonth() - 1, 1);
			self.fillGrid();
			self.fillTitle();
		});
	}	
	
	this.getEvents = function () {
		var self = this;
		
		$.ajax({
			url: host + 'events/getEvents',
			dataType: "txt",
			type: "POST",
			async: false,
			data: {
				from: self.date.toNormalDate(),
				to: self.maxDay.toNormalDate()
			},
			beforeSend: function () {
				if (self.Success === true) {
					return;
				} else {
					self.Success = true;
				}
			},
			success: function (resp) {
				self.DatesHasEvents = resp;
			}
		})
	}
	
	this.init()
}

var SocialNets = function () {
	this.domain=location.href+'/';
	this.domain=this.domain.substr(this.domain.indexOf('://')+3);
	this.domain=this.domain.substr(0,this.domain.indexOf('/'));
	this.location=false;
	this.url=function(system) {
	var title=encodeURIComponent($('title').text().replace('|', '★'));
	var description=encodeURIComponent($('meta[name=description]').attr('content'));
	var url=encodeURIComponent(location.href);
	var image=encodeURIComponent($('meta[name=image]').attr('content'));
	var date = encodeURIComponent($('meta[name=date]').attr('content'));
	if (date != 'undefined') {
		title = title + " ★ " + date;	
	}
		switch (system) {
			case 1: return 'http://vkontakte.ru/share.php?url='+url+'&title='+title+'&description='+description+'&image='+image;
			case 2: return 'http://www.facebook.com/sharer.php?u='+url+'&t='+title;
			case 3: return 'http://twitter.com/share?text='+title+'&url='+url;
			case 4: return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl='+url;
			//case 5: return 'http://connect.mail.ru/share?share_url='+url;
			case 6: return 'http://www.livejournal.com/update.bml?event='+url+'&subject='+title;
			//case 7: return 'http://memori.ru/link/?sm=1&u_data[url]='+url+'&u_data[name]='+title;
			//case 8: return 'http://bobrdobr.ru/addext.html?url='+url+'&title='+title;
			case 9: return 'http://www.google.com/bookmarks/mark?op=add&bkmk='+url+'&title='+title;
			case 10: return 'http://zakladki.yandex.ru/userarea/links/addfromfav.asp?bAddLink_x=1&lurl='+url+'&lname='+title;
			//case 11: return 'http://surfingbird.ru/share?url='+url;
			//case 12: return 'http://text20.ru/add/?title=' + title + '&source='+url+'&text='+title;
		}
	}
	this.redirect = function() {
		if (this.location) location.href=this.location;
		this.location=false;
	}
	
	this.go = function(i) {
		this.location=this.url(i);
	}
	
	this.init = function() {
		var titles=new Array('&#1042; &#1050;&#1086;&#1085;&#1090;&#1072;&#1082;&#1090;&#1077;','Facebook','Twitter','&#1054;&#1076;&#1085;&#1086;&#1082;&#1083;&#1072;&#1089;&#1089;&#1085;&#1080;&#1082;&#1080;','&#1052;&#1086;&#1081; &#1052;&#1080;&#1088;','LiveJournal','Memori','&#1041;&#1086;&#1073;&#1088;&#1044;&#1086;&#1073;&#1088;','&#1047;&#1072;&#1082;&#1083;&#1072;&#1076;&#1082;&#1080; Google','&#1071;&#1085;&#1076;&#1077;&#1082;&#1089;.&#1047;&#1072;&#1082;&#1083;&#1072;&#1076;&#1082;&#1080;','Surfingbird','&#1058;&#1077;&#1082;&#1089;&#1090; 2.0');;
		var html='';
		for (i=0;i<12;i++) {
			if (i == 11 || i == 10 || i == 7 || i == 6 || i == 4 || i == 9) continue;
			html+='<a href="'+this.url(i+1)+'"><img src="'+host+'images/blank.gif" width="16" height="16" alt=" #" title="'+titles[i]+'" style="border:0;padding:0;margin:0 4px 0 0;background-position: 0 -'+(i*16)+'px"/></a>';
		}
		$('#social_nets').append(html);
	}
	
	this.init();
}

var User = function () {
	this.u = {
		is_logged: false,
		is_partner: false,
		name: null,
		id: null
	};
	
	this.init = function () {
		if ($.cookie('anons_dp_ua')) {
			var USER, u = $.cookie('anons_dp_ua');
			u = u.split('~');
			USER = eval(u[1]);
			this.u = {
				is_logged: true,
				is_partner: false,
				name: USER[1],
				id: USER[0]
			};
		}
		
		this.initControls();
	}
	
	this.initControls = function () {
		var self = this;
		if ($('.event_go').length) {
			$('.event_go').click(function() {
				var el = $(this);
				
				if (self.u.is_logged === false) {
					dialog.show(i18n.user_not_found[lang], 'dialog_error');
					return;
				}
				
				var id_event = el.attr('id').replace('event_go_', '');
				var date = el.attr('date');
				
				var action = (el.hasClass('disabled') ? 'remove' : 'add');
				
				if (self.eventToList(id_event, date, action)) {
					var i = Number($('.user_go').text());
					
					if (action == 'add') {
						$('.user_go').text((i+1));
						el.text("Я передумал(а)").addClass('disabled');
					} else {
						$('.user_go').text((i-1));
						el.text("Я пойду").removeClass('disabled');
					}
				};
			});			
		}
		
		if ($('.place_go').length) {
			$('.place_go').click(function() {
				var el = $(this);
				
				if (self.u.is_logged === false) {
					dialog.show(i18n.user_not_found[lang], 'dialog_error');
					return;
				}
				
				var id_place = el.attr('id').replace('place_go_', '');			
				var action = (el.hasClass('disabled') ? 'remove' : 'add');
				
				if (self.placeToList(id_place, action)) {
					var i = Number($('.user_like').text());
					
					if (action == 'add') {
						$('.user_like').text((i+1));
						el.text("Я передумал(а)").addClass('disabled');
					} else {
						$('.user_like').text((i-1));
						el.text("Мне нравится").removeClass('disabled');
					}
				};
			});			
		}		
		
	}
	
	this.eventToList = function (id_event, date, action) {
		var self = this;
		this.valid = true;

		if (this.LOCK === true) return;
		$.ajax({
			url: host + 'users/eventToList',
			data: {id_event: id_event, id_user: this.u.id, date: date, action: action},
			type: 'POST',
			async: false,
			beforeSend: function () {
				self.LOCK = true;
			},
			success: function (msg) {
				self.LOCK = false;
			},				
			error: function () {
				dialog.show(i18n.event_not_found[lang], 'dialog_error', function() {self.LOCK = false});
				self.valid = false;
				self.LOCK = false;
			}
		})
		return this.valid;
	}
	
	this.placeToList = function (id_place, action) {
		var self = this;
		this.valid = true;

		if (this.LOCK === true) return;
		$.ajax({
			url: host + 'users/placeToList',
			data: {id_place: id_place, id_user: this.u.id, action: action},
			type: 'POST',
			async: false,
			beforeSend: function () {
				self.LOCK = true;
			},
			success: function (msg) {
				self.LOCK = false;
			},				
			error: function () {
				dialog.show(i18n.event_not_found[lang], 'dialog_error', function() {self.LOCK = false});
				self.valid = false;
			}
		})
		return this.valid;
	}	

	this.init();
}

function makeEventsGood(i) {
	var str = i + " событий";
	if (i == 1) {
		str = i + " событие";
		
	} else if (i > 1) {
		if (i < 5) {
			str = i + " события";
		}
	}
	
	return str;
}

function makePlacesGood(i) {
	var str = i + " любимых мест";
	if (i == 1) {
		str = i + " любимое место";
		
	} else if (i > 1) {
		if (i == 2 || i == 3 || i == 4) {
			str = i + " любимых места";
		} else {
			str = i + " любимых мест";
		} 
	}
	
	return str;
}

$.fn.focus_blur = function (text) {
	$(this).focus(function () {
		if(!$(this).val() || $(this).val() == text) {
			$(this).val('');
		}
	}).blur(function () {
		if (!$(this).val()) {
			$(this).val(text);
		}
	});
}

var ScrollerTop = function () {
	this.el = $('#top');
	this.H = $(window).height();
	this.O = 0;
	var self = this;	
	$(window).bind('scroll', function () {
		self.O = Math.ceil(((window.pageYOffset / 1.3) / self.H) * 10000) / 10000;
		if (self.O > 1) self.O = 1;
		self.el.css({
			opacity: self.O
		})
	});
}

$.fn.bind_input = function () {
	$(this).focusin(function () {
		$(this).prev().hide();
	});

	$(this).focusout(function () {
		if (!$(this).val()) {
			$(this).prev().show();
		};
	});
}

$(function () {
	var scroller = new ScrollerTop();
	dialog = new Dialog({type: 'opacity'});

	if (typeof(fix_scroll) != 'undefined') {
		$('body').addClass('fix_scroll');
	}

	$('.bind_input').bind_input();

	if ($("#tabs").length) {
		$('#tabs li').click(function () {
			var el = $(this), rel = el.attr('rel'), func;
			$('#tabs li').removeClass('active');
			el.addClass('active');
			$('.tab').addClass('hidden');
			$('.tab.' + rel).removeClass('hidden');
			if (func = el.attr('data-func')) {
				window[func]();
			}
		});
	}

	if (typeof use_calendar != 'undefined') {
		calendar = new MyCalendar();	
	}
	
	if (typeof use_redactor != 'undefined') {
		$('body').append('<script type="text/javascript" src="'+host+'js/redactor/redactor.js"></script>');
		$('#redactor_content').redactor({ toolbar: 'mini', path: '/js/redactor/' });
		$('input[type=radio]').change(function () {
			var id = $(this).attr('id').replace('type-', '');
			$('[id*=tabss-]').hide();
			$('#tabss-' + id).show();
		});
	}

	social_nets = new SocialNets();	
	user = new User();
	
	if ($('.datepicker').length) {
		$('.datepicker').dynDateTime({
			button: ".next()",
			ifFormat: "%Y-%m-%d"
		});
	}

	$('.pointer').click(function () {
		window.location.href = $(this).attr('href');
	});
	
	$('#search #text').bind('keyup', function (e) {
		if(e.keyCode == 13) {
			$(this).parent().submit();
		}
	})
	
	$('#top').click(function () {
		$.scrollTo('#anonsdpua', 200);
	});
	
	if ($('#google_maps').length && !$('#google_maps').hasClass('hide')) { createMap() }
	
	$('#show_google_maps').click(function () {
		var el = $('#google_maps');
		if (el.hasClass('hide')) {
			el.removeClass('hide');
			createMap();			
		}
		$.scrollTo('#google_maps', 250);
	});
	
	$('#get_all_recomended').click(function () {
		var el = $(this), ids = el.attr('ids');
		el.parent().parent().hide();
		
		$.ajax({
			url: host + 'events/getAll',
			data: {ids: ids},
			type: "POST",
			success: function (data) {
				if (data) {
					var box = $('#other_recomended');
					box.html(data);
				}
			}
		})
	});
	
	if (typeof(MAKE_HIGHLIGHT) != 'undefined') { $('.p_info h2').highlight(HIGHLIGHT_TEXT) }
	
	$('.radio_type').bind('click', function () {
		if ($(this).val() == 1) {
			$('#date').hide().prev('label').hide();
			$('#set_dates').hide();
		} else {
			$('#date').show().prev('label').show();
			if ($('#date').val() == 5) {
				$('#set_dates').show();
			}
		}
	});
	
	$('#date').bind('change', function () {
		if ($(this).val() == 5) {
			$('#set_dates').show();
		} else {
			$('#set_dates').hide();
		}
	});
	
	if (typeof(use_pagination) != 'undefined' && use_pagination === true) {
		var placesPagination = new Pagination(use_filtering);
	}
	
	$('#search .button').click(function () { 
		var action = actions[$('input[type=radio]:checked').val()];
		$('#search form').attr('action', action[0]).submit();
	});
		
	$('#text').focus_blur('Что ищем?');
	$('#log').focus_blur('Логин');
	$('#pass').focus_blur('Пароль');
	
	$('.p_href').live('click', function () {
		var href = $(this).attr('href');
		window.location.href = href;
	});
	
	$('.bind_input').prev().click(function () {
		$(this).next().focusin().focus();
	});

	$('#login .button').click(function () {
		var form = $(this).parent(), valid = true;
		$.each(form.find('.bind_input'), function () {
			var input = $(this);
			if (!input.val()) {
				input.focusin().focus();
				valid = false;
				return false;
			}
		});

		if (valid) {
			form.submit();
		}
	});

	$('.line_box').click(function (e) {
		if (!$(e.target).hasClass('line_box')) return;
		
		var el = $(this), type = (el.attr('data-href') ? 'events' : 'places'),
		data = el.attr('data-href') || el.attr('data-id');
		observer[type](data, el);
	});


	if (typeof use_ajax_load != 'undefined') {
		var button = $('#uploadButton');

      	$.ajax_upload(button, {
            action : 'users/upload',
            name: 'myfile',
            onSubmit : function(file, ext) {
              $(".row3 .loader").css({display: 'inline-block'});
              this.disable();
            },
            onComplete : function(file, response) {
              $(".row3 .loader").hide();

              $('#image_hidden').val(file);
              $('#block_for_image')
              	.removeClass('img_small')
              	.html('<img class="img_small" src="http://'+path_to_img+'/images/sunny/events/events/'+file+img_attr+'">');
              
              this.enable();
            }
        });		
	}


	var observer = {
		CACHE: {},
		getEvents: function(id) {
			var self = this;
			if (typeof this.CACHE[id] != 'undefined') return this.CACHE[id];

			$.ajax({
				url: host + 'users/getEventsForPlace',
				data: {id: id},
				type: "POST",
				dataType: "json",
				async: false,
				success: function (data) {
					if (data) {
						self.CACHE[id] = data;
					} else {
						return false;
					}
				}				
			});
			return this.CACHE[id];
		},

		events: function (href) {
			window.location.href = href;
		},

		places: function (id, block) {
			var el = block.next().find('.my_place_events'), parent = el.parent(), 
				html = [], my_events = this.getEvents(id);

			if (my_events.length) {
				for(var i = 0; i < my_events.length; i++) {
					var item = my_events[i];
					html.push('<div class="my_place_event left">');
						html.push('<a href="' + host + 'events/show/' + item.catAlias + '/' + item.alias + '"><img class="img_small" src="http://' + path_to_img + '/images/sunny/events/events/' + item.image + img_attr + '" title="' + item.title + '"></a>');
						html.push(toAnonsDate(item.date));
					html.push('</div>');
				}	
			} else {
				html.push('<div class="empty_events">Нет актуальных событий.</div>');
			}

			html.push('<div class="clearer"></div>');

			html = html.join("");

			if (parent.hasClass('hidden')) {
				el.html(html);
				parent.toggleClass('hidden');
			} else {
				parent.toggleClass('hidden');
			}
		}
	}
})