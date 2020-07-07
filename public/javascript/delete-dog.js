async function deleteFormHandler(event) {d
    event.preventDefault(); 
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/dogs/${id}`,  {
        method: 'DELETE',
        body: JSON.stringify({
            dog_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-dog-btn').addEventListener('click', deleteFormHandler);