import axios from 'axios';
import {environment} from './environment';

axios.defaults.baseURL = environment.hypnos;
axios.defaults.timeout = 20000;
