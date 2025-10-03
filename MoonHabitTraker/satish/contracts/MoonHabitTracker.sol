```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MoodHabitTracker {
    
    struct DailyEntry {
        uint8 mood; // 1-5 scale (1=very bad, 5=very good)
        bool habitCompleted;
        uint256 timestamp;
    }
    
    // Mapping from user address to date (day) to their entry
    mapping(address => mapping(uint256 => DailyEntry)) public entries;
    
    // Mapping to track user's current streak
    mapping(address => uint256) public currentStreak;
    
    event MoodLogged(address indexed user, uint256 date, uint8 mood);
    event HabitLogged(address indexed user, uint256 date, bool completed);
    
    // Function 1: Log daily mood (1-5 scale)
    function logMood(uint8 mood) external {
        require(mood >= 1 && mood <= 5, "Mood must be between 1 and 5");
        
        uint256 today = block.timestamp / 1 days;
        
        entries[msg.sender][today].mood = mood;
        entries[msg.sender][today].timestamp = block.timestamp;
        
        emit MoodLogged(msg.sender, today, mood);
    }
    
    // Function 2: Log daily habit completion
    function logHabit(bool completed) external {
        uint256 today = block.timestamp / 1 days;
        
        entries[msg.sender][today].habitCompleted = completed;
        entries[msg.sender][today].timestamp = block.timestamp;
        
        // Update streak
        if (completed) {
            uint256 yesterday = today - 1;
            if (entries[msg.sender][yesterday].habitCompleted || currentStreak[msg.sender] == 0) {
                currentStreak[msg.sender]++;
            } else {
                currentStreak[msg.sender] = 1;
            }
        } else {
            currentStreak[msg.sender] = 0;
        }
        
        emit HabitLogged(msg.sender, today, completed);
    }
    
    // View function to get entry for a specific date
    function getEntry(uint256 date) external view returns (uint8 mood, bool habitCompleted, uint256 timestamp) {
        DailyEntry memory entry = entries[msg.sender][date];
        return (entry.mood, entry.habitCompleted, entry.timestamp);
    }
    
    // View function to get today's entry
    function getTodayEntry() external view returns (uint8 mood, bool habitCompleted, uint256 timestamp) {
        uint256 today = block.timestamp / 1 days;
        DailyEntry memory entry = entries[msg.sender][today];
        return (entry.mood, entry.habitCompleted, entry.timestamp);
    }
    
    // View function to get current streak
    function getStreak() external view returns (uint256) {
        return currentStreak[msg.sender];
    }
}
```