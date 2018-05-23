export const address = '0xdcd8f5c76b88ab0c91a533403e38062732e31e72'

export const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "answers",
    "outputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "upvotes",
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "questions",
    "outputs": [
      {
        "name": "endTime",
        "type": "uint256"
      },
      {
        "name": "bounty",
        "type": "uint256"
      },
      {
        "name": "asker",
        "type": "address"
      },
      {
        "name": "answerFee",
        "type": "uint256"
      },
      {
        "name": "payedOut",
        "type": "bool"
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "answerIdToQuestionId",
    "outputs": [
      {
        "name": "",
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
        "name": "_minBounty",
        "type": "uint256"
      }
    ],
    "name": "setMinBounty",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "questionIdToVoteIds",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "createQuestion",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "votes",
    "outputs": [
      {
        "name": "voter",
        "type": "address"
      },
      {
        "name": "answerId",
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
        "name": "_questionId",
        "type": "uint256"
      }
    ],
    "name": "createAnswer",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
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
    "constant": true,
    "inputs": [],
    "name": "getDuration",
    "outputs": [
      {
        "name": "",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "reputation",
    "outputs": [
      {
        "name": "",
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
    "name": "getQuestionsCount",
    "outputs": [
      {
        "name": "",
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
    "name": "getAnswerFee",
    "outputs": [
      {
        "name": "",
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
    "name": "getMinBounty",
    "outputs": [
      {
        "name": "",
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
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_answerFee",
        "type": "uint256"
      }
    ],
    "name": "setAnswerFee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_duration",
        "type": "uint256"
      }
    ],
    "name": "setDuration",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "questionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "answerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "answerer",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_weight",
        "type": "uint256"
      }
    ],
    "name": "NewVote",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "questionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "answerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "answerer",
        "type": "address"
      }
    ],
    "name": "NewAnswer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "questionId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "endTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "bounty",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "asker",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "answerFee",
        "type": "uint256"
      }
    ],
    "name": "NewQuestion",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipRenounced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_voter",
        "type": "address"
      },
      {
        "name": "_reputation",
        "type": "uint16"
      }
    ],
    "name": "giveRightToVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_answerId",
        "type": "uint256"
      }
    ],
    "name": "upVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_questionId",
        "type": "uint256"
      }
    ],
    "name": "payoutWinner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]