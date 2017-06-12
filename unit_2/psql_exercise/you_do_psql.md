#  Shortstack Starwars

#### For help: Reference the Docs: http://www.postgresqltutorial.com/

---

If at any time you need to restart:

- In PSQL Run: ``DROP TABLE jedis;``

- Quit PSQL

- In Terminal Run: ``psql -d shortstack_starwars -f seed.sql``

- Restart PSQL

- Connect to your database with ``\c shortstack_starwars``
 

---

 
## In PSQL, run the following commands:



1. Return the names of all the jedi classmates. Output should be: 

        id |         name         | lightsaber_color | years_training | tempted_by_dark_side |         temptation
        ----+----------------------+------------------+----------------+----------------------+-----------------------------
        1  | Dasha Dameron        | white            |             14 | f                    | The LES
        2  | Sooj Solo            | blue             |             12 | f                    | beards
        3  | Hailey-Gon Jinn      | purple           |             15 | f                    | IPAs
        4  | David Sideous        | purple           |             18 | f                    | video games
        5  | Darius Fett          | teal             |              5 | f                    | proper electrical grounding
        6  | Ralph Ren            | green            |              5 | f                    | Tupac vs. Biggie debates
        7  | Daniel Dooku         | red              |              7 | t                    | all the puppies
        8  | Yunabacca            | green            |             14 | f                    | altoid mints
        9  | Darth May            | orange           |             14 | f                    | adobe creative suite
        10 | Alvaro Windu         | green            |              8 | f                    | trusting the phrase YOLO
        11 | Alvin Kenobi         | red              |             19 | t                    | supercars
        12 | Chancellor Christian | blue             |             10 | f                    | unit testing
        13 | Rashish-2187          | orange           |             14 | f                    | talking to slackbots
        14 | Reggie-the-Hutt      | red              |              8 | t                    | SHOTS
        15 | Mekesia Maul         | red              |              2 | t                    | darts
        16 | Brian-TR8R           | brown            |             11 | f                    | old fashions
        17 | Alli-3P0             | red              |              6 | t                    | the perfect screenplay
        18 | Bea-Bea-8            | white            |              5 | f                    | kitten videos
        19 | Victor Binks         | red              |             19 | t                    | cute old people

- Select all the SITH (red lightsabers from jedis) You should be returned:
    
          name
        -----------------
        Daniel Dooku
        Alvin Kenobi
        Reggie-the-Hutt
        Mekesia Maul
        Alli-3P0
        Victor Binks
        
- There was an assanation by the Sith! All the green lightsaber owners need to be deleted from the records! You should be returned:

        DELETE 3    
    
- SELECT * FROM jedis, you should see the green lightsaber owners missing.  
    
- A New Jedi emerges. Add "The unknown" with a "black" lightsaber who has 100 years training, never tempted by the dark side, and tempation is "absolutely nothing"

- When you select all from jedis, you should notice a new jedi:
        | the unknown          | black            |            100 | f                    | absolutely nothing

- The new Jedi trains all of the blue light saber owners. They dobule their years_training instantly. This command should return: 
        UPDATE 2    

- The orange lightsaber owners attack the unknown in the night. Ultimate fail. Remove the orange lightsaber owners

- If you select * from jedis, you should get: 

        id |         name         | lightsaber_color | years_training | tempted_by_dark_side |         temptation
        ----+----------------------+------------------+----------------+----------------------+-----------------------------
        1  | Dasha Dameron        | white            |             14 | f                    | The LES
        3  | Hailey-Gon Jinn      | purple           |             15 | f                    | IPAs
        4  | David Sideous        | purple           |             18 | f                    | video games
        5  | Darius Fett          | teal             |              5 | f                    | proper electrical grounding
        7  | Daniel Dooku         | red              |              7 | t                    | all the puppies
        11 | Alvin Kenobi         | red              |             19 | t                    | supercars
        14 | Reggie-the-Hutt      | red              |              8 | t                    | SHOTS
        15 | Mekesia Maul         | red              |              2 | t                    | darts
        16 | Brian-TR8R           | brown            |             11 | f                    | old fashions
        17 | Alli-3P0             | red              |              6 | t                    | the perfect screenplay
        18 | Bea-Bea-8            | white            |              5 | f                    | kitten videos
        19 | Victor Binks         | red              |             19 | t                    | cute old people
        20 | the unknown          | black            |            100 | f                    | absolutely nothing
        2  | Sooj Solo            | blue             |             24 | f                    | beards
        12 | Chancellor Christian | blue             |             20 | f                    | unit testing
    
- Concerned, The new Jedi converts the brown and purple lightsaber owners to blue, and doubles their training also... The output should be:

                id |         name         | lightsaber_color | years_training | tempted_by_dark_side |         temptation
        ----+----------------------+------------------+----------------+----------------------+-----------------------------
        1  | Dasha Dameron        | white            |             14 | f                    | The LES
        5  | Darius Fett          | teal             |              5 | f                    | proper electrical grounding
        7  | Daniel Dooku         | red              |              7 | t                    | all the puppies
        11 | Alvin Kenobi         | red              |             19 | t                    | supercars
        14 | Reggie-the-Hutt      | red              |              8 | t                    | SHOTS
        15 | Mekesia Maul         | red              |              2 | t                    | darts
        17 | Alli-3P0             | red              |              6 | t                    | the perfect screenplay
        18 | Bea-Bea-8            | white            |              5 | f                    | kitten videos
        19 | Victor Binks         | red              |             19 | t                    | cute old people
        20 | the unknown          | black            |            100 | f                    | absolutely nothing
        2  | Sooj Solo            | blue             |             24 | f                    | beards
        12 | Chancellor Christian | blue             |             20 | f                    | unit testing
        3  | Hailey-Gon Jinn      | blue             |             30 | f                    | IPAs
        4  | David Sideous        | blue             |             36 | f                    | video games
        16 | Brian-TR8R           | blue             |             22 | f                    | old fashions
        
        
- The ultimate Jedi battle takes place. Sadly, all novice Jedi (good and bad) with < 20 years_training need to be deleted from our records.

- The unknown one vanishes. Remove them from the records. 

- Who are the last standing Jedis? What trait do they all share?

        :cue starwars music: 

  





