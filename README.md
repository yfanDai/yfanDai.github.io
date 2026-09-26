# Yifan Dai 网站

这是一个 React + Vite 网站。推送到 `main` 后，[GitHub Actions](.github/workflows/deploy.yml) 会运行 `npm ci` 和 `npm run build`，再将 `dist` 发布到 GitHub Pages。

## 本地预览

```bash
npm ci
npm run dev
```

修改完成后，用 `npm run build` 检查生产构建。`dist` 是生成文件，不需要提交。

## 添加、修改和删除论文

论文列表在 [`src/data/publications.js`](src/data/publications.js) 的 `publications` 数组中。每个 `{ ... }` 对象是一篇论文，数组顺序就是首页展示顺序。直接编辑相应对象即可修改；删除整个对象即可从列表和项目页中移除。

添加论文时，先把封面图放入 `src/assets/paper_image/`，如需本地 PDF 则放入 `src/assets/paper/`，然后在 `publications.js` 顶部导入文件，并在 `publications` 数组中加入一个对象：

```js
import myPaperImage from "../assets/paper_image/my-paper.png";
import myPaperPdf from "../assets/paper/my-paper.pdf";

// publications 数组中的一项；放在你希望显示的位置
{
    id: "my-paper",
    title: "My Paper: Subtitle",
    abstract: "简短摘要",
    authors: [
        { name: "Yifan Dai", link: "https://yfandai.github.io/" },
        { name: "Coauthor" },
    ],
    venues: [{ name: "Conference 2026", type: "conference" }],
    links: { pdf: myPaperPdf },
    image: myPaperImage,
    tags: ["Machine Learning"],
},
```

- `id` 必须唯一，会成为 `/projects/my-paper/` 网址。把 `id` 和紧随其后的 `title` 写成上例那样的字符串字面量，构建脚本才能生成该项目页的直接访问入口。
- `authors` 使用论文的真实署名；`Yifan Dai` 会在作者列表中高亮。作者的 `link` 可省略。
- `venues[].type` 可使用 `conference`、`journal`、`workshop`、`wip`、`project` 或 `exhibition`。
- `links` 可填 `pdf`、`arxiv`、`acm`、`github`、`web`、`code`、`demo` 等；没有的链接可以不写。PDF 也可以直接使用外部网址，不必导入文件。
- `tags` 建议使用文件底部 `tagStyleMap` 中已有的分类。新增分类时，也要在 `tagStyleMap` 中添加对应颜色。
- 如果要给项目页添加详细内容，可新建 `src/data/content/my-paper.json`，文件名应与 `id` 相同。没有这个文件时，项目页仍会显示标题、作者、图片和链接。
- 可选的 BibTeX 内容在 [`src/data/citations.js`](src/data/citations.js)，以同一个 `id` 为键。删除论文时，也检查 `related` 数组、对应的内容 JSON 和 BibTeX 条目是否需要清理。
- 如果要替换掉所有旧论文，请先添加至少一篇自己的论文，再删除最后一篇旧论文；当前构建脚本要求列表中至少有一项。

编辑后执行 `npm run build`；通过后提交并推送到 `main`，网站会自动重新编译和发布。
