# Node notes application
This simple application runs node scripts and writes into `notes.json` notes that can be removed, append, list and read

## Commands
### add
```javascript
node app.js add --title="My title" --body="My body"
```
add command expects 2 (two) string parameters and inserts it to the array.
* `title`: note title and id
* `body`: body message

### remove
```javascript
node app.js remove --title="My title"
```
`remove` expects only 1 (one) string parameter to be removed
### read
```javascript
node app.js read --title="My title"
```
`read` expects 1 (one) string parameter to be filtered

### list
```javascript
node app.js list
```
`list` will list all notes
