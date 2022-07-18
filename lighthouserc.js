module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      staticDistDir: './public',
      numberOfRuns: 1,
      settings: {
        chromeFlags:
          '--no-sandbox  --headless --disable-gpu --disable-dev-shm-usage',
      },
    },
  },
}
