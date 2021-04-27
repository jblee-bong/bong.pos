var store = [{
        "title": "Markup: Syntax Highlighting",
        "excerpt":"Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect...","categories": [],
        "tags": ["code","syntax highlighting"],
        "url": "https://geneuin.github.io//2013/08/16/markup-syntax-highlighting.html"
      },{
        "title": "테스트용 포스트입니다",
        "excerpt":"Test 용 포스팅입니다 ! ","categories": ["test"],
        "tags": ["test"],
        "url": "https://geneuin.github.io//test/2021/04/26/Test-post.html"
      },{
        "title": "테스트용 포스트입니다2",
        "excerpt":"Test 용 포스팅입니다 !     Table of Contents    123123 ","categories": ["test"],
        "tags": ["test"],
        "url": "https://geneuin.github.io//test/2021/04/26/test2.html"
      },{
        "title": "블로그 가이드 -1- 포스트 작성 방법",
        "excerpt":"포스트 작성 방법 파일 형식 포스트 작성은 _posts 폴더 내에 작성합니다.예 ) 2021-04-27-title-ex2-ex3.md 위와 같은 형식으로 마크다운 .md 파일로 작성합니다. ( ex는 빼도 됩니다. ) 파일 이름은 포스트 제목과 연관이 없습니다.frontMatter .md 파일 내에 포스트에 대한 메타 데이터를 작성해야 합니다. Front Matter 란 jekyll 에서 포스트나 페이지를 관리하는데 사용하기 위해...","categories": ["Blog"],
        "tags": [],
        "url": "https://geneuin.github.io//blog/2021/04/28/title-1-%ED%8F%AC%EC%8A%A4%ED%8A%B8-%EC%9E%91%EC%84%B1-%EB%B0%A9%EB%B2%95.html"
      },{
        "title": "블로그 가이드 -2- 작성자 형식 만들기",
        "excerpt":"author 작성자 루트 경로의 _data 폴더 내의 authors.yml 에 작성자를 정의할 수 있습니다. 예 ) # GeneuinGeneuin: // 참조 값 name: Geneuin // 이름 picture: /images/michael-rose-photo.jpg // 프로필 사진 email: # twitter: mmistakes links: # - title: Twitter # url: https://twitter.com/mmistakes # icon: fab fa-twitter-square # - title: Instagram #...","categories": ["Blog"],
        "tags": [],
        "url": "https://geneuin.github.io//blog/2021/04/28/title-2-author-%EC%9E%91%EC%84%B1%EC%9E%90.html"
      },{
        "title": "블로그 가이드 -3- 마크다운 사용법 ",
        "excerpt":"마크다운 기본 문법 헤더 # Header one## Header two### Header three#### Header four##### Header five###### Header sixHeader one Header two Header three Header four Header five Header six Blockquotes ` &gt; ` 를 사용해 강조문을 만들 수 있습니다. 예 ) test 예 ) test test Tables 표 작성 기능 |...","categories": ["Blog"],
        "tags": [],
        "url": "https://geneuin.github.io//blog/2021/04/28/title-3-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EC%82%AC%EC%9A%A9%EB%B2%95.html"
      },{
        "title": "블로그 가이드 -4- 코드블럭",
        "excerpt":"코드블럭 코드블럭을 작성하는 방법은 크게 3가지가 있습니다. 코드블럭 1) basic ` ``` ` 로 코드 앞뒤를 묶어줍니다. ```css #container { float: left; margin: 0 -240px 0 0; width: 100%; } ```위와 같이 해당 코드 처음과 마지막에 ` `를 붙여줍니다. 시작하는 ` ` 에 코드의 언어를 붙여주면 해당 코드에 하이라이트가 적용됩니다....","categories": ["Blog"],
        "tags": [],
        "url": "https://geneuin.github.io//blog/2021/04/28/title-4-%EC%BD%94%EB%93%9C%EB%B8%94%EB%9F%AD.html"
      },{
        "title": "블로그 가이드 -5- 각주 삽입",
        "excerpt":"각주 기능 포스트 내에 각주를 추가할 수 있습니다. 예) Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and...","categories": ["Blog"],
        "tags": [],
        "url": "https://geneuin.github.io//blog/2021/04/28/title-5-%EA%B0%81%EC%A3%BC-%EA%B8%B0%EB%8A%A5.html"
      },{
        "title": "블로그 가이드 -6- 목차 작성방법",
        "excerpt":"목차 기능 마크다운으로 작성한 헤더에 대해 목차를 표시할 수 있습니다. ` # ` , ## 등 포스트 내에 목차를 표시할려면 {::options parse_block_html=\"true\" /}&lt;div id=\"entry-table-of-contents\" class=\"toc-wrapper\"&gt;&lt;h2 id=\"toc-toggle\" class=\"no_toc\"&gt; Table of Contents &lt;i class=\"toc-toggle-icon fas fa-chevron-down\"&gt;&lt;/i&gt;&lt;/h2&gt;1. toc{:toc}&lt;/div&gt;{::options parse_block_html=\"false\" /}를 작성해 주기만하면 됩니다. 예 ) Table of Contents 목차 기능 참고 예시 )...","categories": ["Blog"],
        "tags": [],
        "url": "https://geneuin.github.io//blog/2021/04/28/title-6-%EB%AA%A9%EC%B0%A8.html"
      },{
        "title": "블로그 가이드 -7- 유튜브 삽입 방법",
        "excerpt":"유튜브 삽입 방법 &lt;div class=\"responsive-embed responsive-embed-16by9\"&gt;  &lt;iframe src=\"https://www.youtube.com/watch?v=-PVofD2A9t8\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;또는  유튜브가 삽입될 곳에 url 부분만 바꿔 사용가능합니다. 예시 )   참고 참고 사이트 ","categories": ["Blog"],
        "tags": [],
        "url": "https://geneuin.github.io//blog/2021/04/28/title-7-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EC%82%BD%EC%9E%85.html"
      },{
        "title": "블로그 가이드 -8- 이미지 삽입 및 포스트 커버 이미지",
        "excerpt":"이미지 삽입 및 포스트 커버 이미지 이미지 삽입방법 이미지를 삽입할 곳에 ![ex_screenshot](/images/blogGuide/screenshot.png)위처럼 작성하면 됩니다.img태그와 비교하자면 [] 블럭은 alt () 블럭은 src 속성 입니다. 포스트 커버 이미지 예시 사이트 위 예시 사이트 처럼 포스트 커버 이미지를 지원합니다. ---title: \"Layout: Hero Image\"image: path: /images/so-simple-sample-image-3.jpg thumbnail: /images/so-simple-sample-image-3-400x200.jpg caption: \"Photo from [WeGraphics](http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/)\"categories: - Layouttags:...","categories": ["Blog"],
        "tags": [],
        "url": "https://geneuin.github.io//blog/2021/04/28/title-8-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%BD%EC%9E%85-%EB%B0%8F-%ED%8F%AC%EC%8A%A4%ED%8A%B8-%EC%BB%A4%EB%B2%84-%EC%9D%B4%EB%AF%B8%EC%A7%80.html"
      },{
        "title": "Chocolate Chip Cookies",
        "excerpt":"A chocolate chip cookie is a drop cookie that originated in the United States and features chocolate chips as its distinguishing ingredient. The traditional recipe combines a dough composed of butter and both brown and white sugar with semi-sweet chocolate chips. Variations include recipes with other types of chocolate as...","categories": [],
        "tags": [],
        "url": "https://geneuin.github.io//recipes/chocolate-chip-cookies/"
      },{
        "title": "Oatmeal Cookies",
        "excerpt":"Oatmeal cookies are a proverbial favorite with both kids and adults. This crisp and chewy cookie is loaded with oats, dried fruit, and chopped nuts. Ingredients 1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 1 teaspoon vanilla extract 2 cups all-purpose flour 1...","categories": [],
        "tags": [],
        "url": "https://geneuin.github.io//recipes/oatmeal-cookies/"
      },{
        "title": "Peanut Butter Cookies",
        "excerpt":"A peanut butter cookie is a type of cookie that is distinguished for having peanut butter as a principal ingredient. The cookie generally originated in the United States, its development dating back to the 1910s. Ingredients 1 cup unsalted butter 1 cup crunchy peanut butter 1 cup white sugar 1...","categories": [],
        "tags": [],
        "url": "https://geneuin.github.io//recipes/peanut-butter-cookies/"
      }]
