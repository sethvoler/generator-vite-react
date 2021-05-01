const Generator = require('yeoman-generator');
const templates = [
  '.babelrc',
  '.eslintrc.js',
  '.gitignore',
  'README.md',
  'declaration.d.ts',
  'index.html',
  'package.json',
  'prettier.config.js',
  'src/app.tsx',
  'src/assets/images/sign_bg.jpg',
  'src/components/ErrorBoundary/index.tsx',
  'src/components/Icon/index.tsx',
  'src/components/LayoutHeader/index.less',
  'src/components/LayoutHeader/index.tsx',
  'src/components/PrivateRoute/index.tsx',
  'src/components/Socket/index.tsx',
  'src/components/TrtcRoom/index.less',
  'src/components/TrtcRoom/index.tsx',
  'src/config.ts',
  'src/index.tsx',
  'src/locales/en_US.json',
  'src/locales/zh_CN.json',
  'src/mobx/basicStore.ts',
  'src/mobx/dashboard/store.ts',
  'src/mobx/dashboard/type.d.ts',
  'src/mobx/rootStore.ts',
  'src/mobx/useRootStore.ts',
  'src/mock/mock.ts',
  'src/pages/addGoods/index.less',
  'src/pages/addGoods/index.tsx',
  'src/pages/bus/index.tsx',
  'src/pages/dashboard/index.less',
  'src/pages/dashboard/index.tsx',
  'src/pages/home/components/menu.tsx',
  'src/pages/home/index.less',
  'src/pages/home/index.tsx',
  'src/pages/user/error.less',
  'src/pages/user/error.tsx',
  'src/pages/user/login.less',
  'src/pages/user/login.tsx',
  'src/request.ts',
  'src/routeConfig.tsx',
  'src/servers/dashboard.ts',
  'src/styles/index.less',
  'src/typings/app.d.ts',
  'src/typings/store.d.ts',
  'src/utils/event.ts',
  'src/utils/index.ts',
  'stylelint.config.js',
  'tsconfig.json',
  'vite.config.ts'
];

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name?',
        default: this.appname
      }
    ])
      .then(answers => {
        this.answers = answers;
      });
  }
  // 添加 writing 方法，通过数组循环的方式将模板输出到目标路径
  writing() {
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      );
    })
  }
};