# SimpleStep

## Installation
To install the simple-step into an existing project, use the npm CLI
```
npm install simple-step-progress
```

After installation, you can import the component into your project.
```
import SimpleStep from 'SimpleStep';

Vue.use(SimpleStep);
```
and implement function to receive upload event

```
<SimpleStep :currentIndex.sync="currentIndex" :bookMark.sync="bookMark"/>
```


### Goals
The primary goal of this library is to provide reusable step-progress component.
You can set your own step by setting bookmark variable, and just modifies the currentIndex variable to change the step.


### Demo Page
See [Demo Page](https://jeff42work.github.io/SimpleStep/).