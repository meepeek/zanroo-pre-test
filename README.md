# Zanroo Pre-Test Submission
### Candidate: Thamawij Pirajnaraporn (Joke)

Since I was short on time for I had many recruitment calls today, I cannot fine tune the appearance to match exactly with the given requirement na kub. However, the core functionality should be met.

This project was built on top of loopback.io and react-admin. This is easier for me for I am digging the react-admin structure for my private web admin system. So I strip my authentication code and left with just REST adapter. This might be a bit of cheating but I think it should be able to proof that I can control react components for some degree.

### To run a project
You will need nodejs with npx support. Change directory to zanroo-pre-test and then
```npm run start```

Ohterwise, if you already had lerna, you may start project with
```lerna bootstrap && lerna run start```

### Project Explaination
Lerna is a package manager for projects with multiple packages. In this case, loopback and react-admin. The startup script will run loopback on port 3333 which provide REST API for model UserForm then react-admin on port 3000 will be able to pickup and display on web browser. Since react-admin and loopback already support CRUD, I then defined a model according to your given UI.
