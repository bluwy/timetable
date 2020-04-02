<p align="center">
  <img src="./public/img/icons/icon-96x96.png" alt="logo">
</p>

<h1 align="center">Timetable</h1>

<p align="center">A timetable for personal use</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3ccac60-2ef5-4d0e-89ff-67b222ea1fd1/deploy-status)](https://app.netlify.com/sites/timetable-bjornlu/deploys)

[**Visit website**](https://timetable.bjornlu.com)

## Features

- Progressive Web App (PWA)
- Data are saved locally, no sign-ups required
- No IE support

## Todo

- [ ] Switch to [VeeValidate](https://logaretm.github.io/vee-validate/). Now, [VueFormulate](https://vueformulate.com/) provides components which can't be resolved during compile time, meaning it loads all of its component and is unable to be tree-shaken.
- [ ] Better inputs, especially autocomplete inputs.
- [ ] Better PWA look on mobile devices.

## Development

```bash
# Start dev serverI
$ yarn serve

# Build for production
$ yarn build

# Lint files
$ yarn lint
```

## License

MIT

