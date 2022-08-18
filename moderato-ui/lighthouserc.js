module.exports = {
  ci: {
    collect: {
      AnumberOfRuns: 1, // Lighthouse の試行回数は1回
      startServerCommand: 'yarn start', // プロダクションモードでローカルサーバーを起動する
      url: ['http://localhost:3000/'], // 評価対象のURL
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
