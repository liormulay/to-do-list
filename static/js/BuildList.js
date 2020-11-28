const template = document.createElement('template');
template.innerHTML = `
<header>
    <h1></h1>
</header>

<main>
    <div class="contain">
        <input id="taskInput" placeholder="Enter a task" />
        <button id="addTaskBtn" class="pinkButton">Add to list</button>
        <ul id="to-do-list" class="listclass"></ul>
        <button id="submit-button" class="pinkButton" disabled>Submit</button>
    </div>
</main>
`

document.body.appendChild(template.content);