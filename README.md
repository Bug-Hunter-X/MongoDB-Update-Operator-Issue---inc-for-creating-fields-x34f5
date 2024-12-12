# MongoDB Update Operator Issue: $inc for creating fields

This repository demonstrates a common error when using MongoDB's `$inc` operator to update or create fields within documents.  The `$inc` operator is designed to increment numeric fields. Incorrect usage can lead to unexpected behavior, particularly when attempting to create a new field.

The `bug.js` file showcases the incorrect usage of `$inc`, while `bugSolution.js` provides the correct approach using both `$inc` (for incrementing) and `$set` (for creating or setting new field values).

## Bug Description
The `$inc` operator will only update the age field if the document with the name "John" exists and already has an age field. If the document exists but doesn't have the age field, this operation won't create the field and set its value to 10. 
## Solution
Use `$set` to create new fields and assign values and `$inc` to increment the existing fields.