var friends = require("../data/friends.js"); 
 
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	})

	app.post("/api/friends", function(req, res) {

	var newMatch = req.body;

		for(var i = 0; i < newMatch.scores.length; i++) {
			if(newMatch.scores[i] == "1 (Strongly Disagree)") {
				newMatch.scores[i] = 1;
			} else if(newMatch.scores[i] == "5 (Strongly Agree)") {
				newFriend.scores[i] = 5;
			} else {
				newFriend.scores[i] = parseInt(newFriend.scores[i]);
			}
		}

		var differencesArray = [];

		for(var i = 0; i < friendData.length; i++) {

			var compare = friendData[i];
			var totalDifference = 0;
			
			for(var k = 0; k < compare.scores.length; k++) {
				var differenceOneScore = Math.abs(compare.scores[k] - newFriend.scores[k]);
				totalDifference += differenceOneScore;
			}

			differencesArray[i] = totalDifference;
		}

		var newFriendNum = differencesArray[0];
		var newFriendIndex = 0;

		for(var i = 1; i < differencesArray.length; i++) {
			if(differencesArray[i] < newFriendNum) {
				newFriendNum = differencesArray[i];
				newFriendIndex = i;
			}
		}

		friends.push(newMatch);

		res.json(friends[newFriendIndex]);
	})
}

