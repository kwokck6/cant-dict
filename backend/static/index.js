function deleteWord(wordId) {
    fetch('/delete-word', {
        method: 'POST',
        body: JSON.stringify({ wordId: wordId })
    }).then((_res) => {
        window.location.href = '/your-dict';
    });
}
