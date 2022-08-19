module.exports = {
  ci: {
    collect: {
      // AnumberOfRuns: 1, // Lighthouse の試行回数は1回
      // startServerCommand: 'yarn start', // プロダクションモードでローカルサーバーを起動する
      // url: ['http://localhost:3000/'], // 評価対象のURL
      staticDistDir: './.next',
      url: ['/'],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://secret-journey-75761.herokuapp.com/',
      token: 'b7089bc4-7020-4497-b9d0-ef2ddba0ebfd',
    },
  },
};
