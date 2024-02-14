$(document).ready(function() {
    $('#task-form').submit(function(e) {
        e.preventDefault();
        var taskName = $('#task-input').val();
        if (taskName.trim() !== '') {
        $('#task-list').append('<li>' + taskName + '</li>');
        $('#task-input').val('');
    }
    });
    $(document).on('click', '#task-list li', function() {
        $(this).toggleClass('completed');
    });
});