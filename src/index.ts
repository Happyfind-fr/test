// IMPORT ET NON REQUIRE parce que typescript
import * as dotenv from 'dotenv';
import router from './router/router';

// pareil plus de require
dotenv.config();

//  si y'a pas de port dans le dotenv bah ça quitte
if (!process.env.PORT) process.exit(1);

//  on crée une constante port qui prends le port du dotenv et on lui assigne un type number, integer
const PORT: number = parseInt(process.env.PORT as string, 10);

// meme chose qu'en js classique
router.listen(PORT, () => console.log("Connected to port " + PORT));
