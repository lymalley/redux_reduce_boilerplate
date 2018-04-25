function syntaxHighlight(json) {
    if (typeof json !== 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}


// fake db fetch
const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

const apiFetchCars = () =>
    delay(1000).then(() => {
        return ['PEUGEOT', 'TOYOTA', 'MINI', 'FORD', 'BORGWARD', 'RENAULT', 'BUGGY', 'MERCEDES', 'MITSUBISHY', 'CHEVROLET', 'OPEL'];
    });



// thunk is available as a npm package
const thunk = store => next => action =>
{
    return typeof action === 'function'
        ? action(store.dispatch, store.getState)
        : next(action);
};