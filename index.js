module.exports = {
  environments: {
    truffle: {
      globals: {
        artifacts: 'readonly',
        contract: 'readonly',
        assert: 'readonly',
        web3: true,
      },
    },
  },
};
