export const CONTRACT_ADDRESS = '0x2a15434b4ae090cfaac19593e922277f5426bef0' 
export const CONTRACT_ABI = [
  {
    ""anonymous"": false,
    ""inputs"": [
      {
        ""indexed"": true,
        ""internalType"": ""address"",
        ""name"": ""user"",
        ""type"": ""address""
      },
      {
        ""indexed"": false,
        ""internalType"": ""uint256"",
        ""name"": ""date"",
        ""type"": ""uint256""
      },
      {
        ""indexed"": false,
        ""internalType"": ""bool"",
        ""name"": ""completed"",
        ""type"": ""bool""
      }
    ],
    ""name"": ""HabitLogged"",
    ""type"": ""event""
  },
  {
    ""anonymous"": false,
    ""inputs"": [
      {
        ""indexed"": true,
        ""internalType"": ""address"",
        ""name"": ""user"",
        ""type"": ""address""
      },
      {
        ""indexed"": false,
        ""internalType"": ""uint256"",
        ""name"": ""date"",
        ""type"": ""uint256""
      },
      {
        ""indexed"": false,
        ""internalType"": ""uint8"",
        ""name"": ""mood"",
        ""type"": ""uint8""
      }
    ],
    ""name"": ""MoodLogged"",
    ""type"": ""event""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""address"",
        ""name"": """",
        ""type"": ""address""
      }
    ],
    ""name"": ""currentStreak"",
    ""outputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": """",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""address"",
        ""name"": """",
        ""type"": ""address""
      },
      {
        ""internalType"": ""uint256"",
        ""name"": """",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""entries"",
    ""outputs"": [
      {
        ""internalType"": ""uint8"",
        ""name"": ""mood"",
        ""type"": ""uint8""
      },
      {
        ""internalType"": ""bool"",
        ""name"": ""habitCompleted"",
        ""type"": ""bool""
      },
      {
        ""internalType"": ""uint256"",
        ""name"": ""timestamp"",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": ""date"",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""getEntry"",
    ""outputs"": [
      {
        ""internalType"": ""uint8"",
        ""name"": ""mood"",
        ""type"": ""uint8""
      },
      {
        ""internalType"": ""bool"",
        ""name"": ""habitCompleted"",
        ""type"": ""bool""
      },
      {
        ""internalType"": ""uint256"",
        ""name"": ""timestamp"",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""getStreak"",
    ""outputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": """",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""getTodayEntry"",
    ""outputs"": [
      {
        ""internalType"": ""uint8"",
        ""name"": ""mood"",
        ""type"": ""uint8""
      },
      {
        ""internalType"": ""bool"",
        ""name"": ""habitCompleted"",
        ""type"": ""bool""
      },
      {
        ""internalType"": ""uint256"",
        ""name"": ""timestamp"",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""bool"",
        ""name"": ""completed"",
        ""type"": ""bool""
      }
    ],
    ""name"": ""logHabit"",
    ""outputs"": [],
    ""stateMutability"": ""nonpayable"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""uint8"",
        ""name"": ""mood"",
        ""type"": ""uint8""
      }
    ],
    ""name"": ""logMood"",
    ""outputs"": [],
    ""stateMutability"": ""nonpayable"",
    ""type"": ""function""
  }
]
