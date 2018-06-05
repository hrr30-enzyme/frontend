export const address = '0x1e07fb896165694f8c9e71f0b778af350452073b'

export const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getQuestionCount",
    "outputs": [
      {
        "name": "count",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAnswerCount",
    "outputs": [
      {
        "name": "count",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "qid",
        "type": "uint256"
      }
    ],
    "name": "getQuestion",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "user",
        "type": "address"
      },
      {
        "name": "bounty",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "aid",
        "type": "uint256"
      }
    ],
    "name": "getAnswer",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "user",
        "type": "address"
      },
      {
        "name": "score",
        "type": "uint256"
      },
      {
        "name": "questionId",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "voter",
        "type": "address"
      },
      {
        "name": "aid",
        "type": "uint256"
      }
    ],
    "name": "hasVoted",
    "outputs": [
      {
        "name": "hasIndeed",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "qid",
        "type": "uint256"
      }
    ],
    "name": "createQuestion",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "aid",
        "type": "uint256"
      },
      {
        "name": "qid",
        "type": "uint256"
      }
    ],
    "name": "createAnswer",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "aid",
        "type": "uint256"
      }
    ],
    "name": "upVote",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "qid",
        "type": "uint256"
      }
    ],
    "name": "increaseBounty",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "qid",
        "type": "uint256"
      }
    ],
    "name": "getQuestionAnswersCount",
    "outputs": [
      {
        "name": "count",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "qid",
        "type": "uint256"
      }
    ],
    "name": "payout",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]