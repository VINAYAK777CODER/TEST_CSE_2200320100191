document.getElementById('continueBtn').addEventListener('click', function() {
    const userId = document.getElementById('login').value;
    const userPin = document.getElementById('pin').value;

    
    if (userId === userPin) {
       
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(users => {
                
                document.querySelector('.form-container').style.display = 'none';
                document.getElementById('userList').style.display = 'block';

                const userListContainer = document.getElementById('userListContainer');
                userListContainer.innerHTML = ''; 

                
                users.slice(0, 10).forEach((user, index) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${index + 1}. ${user.login}`; 
                    userListContainer.appendChild(listItem);
                });

              
                document.getElementById('login').value = '';
                document.getElementById('pin').value = '';
            })
            .catch(error => {
                alert('Failed to fetch user data: ' + error);
            });
    } else {
        alert('Invalid ID or PIN. Both must be the same.');
    }
});
