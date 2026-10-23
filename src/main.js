import { inject } from '@vercel/analytics';
import './style.css';

inject({ mode: import.meta.env.PROD ? 'production' : 'development' });
