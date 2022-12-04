# Nodejs password manager

Simple no encrtption password manager, recomend to protect sqlite db with:

```
chown 0 passwords.db
chmod 0 passwords.db
```

## Available commands:

- help (lists all available commands)
- all (lists all passwords)
- new (creates new password with given information)
- newTable (creates table - only needed when first time opening the app)
- del (deletes password with given id)
- search (searches for password provider including the given string)
