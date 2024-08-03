function toggleBold() {
    document.execCommand('bold');
    const boldButton = document.getElementById('bold-button');
    boldButton.classList.toggle('active');
}

function cambiarFuente() {
    const fontSelector = document.getElementById('fontSelector');
    const editor = document.getElementById('editor');
    editor.style.fontFamily = fontSelector.value;
}

function descargarTexto(formato) {
    const editorContent = document.getElementById('editor').innerHTML;

    if (formato === 'txt') {
        const blob = new Blob([editorContent], { type: 'text/plain' });
        const enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = 'mi_texto.txt';
        enlace.click();
        URL.revokeObjectURL(enlace.href);
    } else if (formato === 'doc') {
        const blob = new Blob(['\ufeff' + editorContent], { type: 'application/msword' });
        const enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = 'mi_texto.doc';
        enlace.click();
        URL.revokeObjectURL(enlace.href);
    } else if (formato === 'pdf') {
        const element = document.getElementById('editor');
        html2pdf().from(element).save('mi_texto.pdf');
    }
}