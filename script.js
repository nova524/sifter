document.getElementById('compareBtn').addEventListener('click', function() {
    var followerList = document.getElementById('followerList').value.split('\n');
    var followingList = document.getElementById('followingList').value.split('\n');
    var differenceList = followingList.filter(function(item) {
      return !followerList.includes(item);
    });
    document.getElementById('differenceList').value = differenceList.join('\n');
  });
  