import rohanRun from '../assets/rohan_run.jpg';
import rohanConfessional from '../assets/rohan_confessional.jpg';
import rohanPose from '../assets/rohan_pose.png';

export const movies = [
    {
        id: 1,
        slug: 'confessional', // Mapped to Image 1 (Confessional?) - actually let's use the order from the prompt images if possible, but matching text is better.
        // Image 0: Running -> The Run (Episode 16 in manga numbering, or Episode 9 in anime). 
        // Image 1: Confessional -> Episode 16: At a Confessional (Image 1 usually corresponds to first item?)
        // Image 2: Pose -> Generic or Mutsu-kabe Hill.
        // Let's use the Summary Table order for text: 
        // 1. At a Confessional (Ep 16)
        // 2. Mutsu-kabe Hill (Ep 2)
        // 3. Millionaire Village (Ep 5)

        // Mapping images:
        // rohan_run.jpg (Image 0) -> Looks like "The Run". But "The Run" isn't in top 3 of the summary table provided in Image 3?
        // Wait, Image 3 shows Ep 16 (Confessional), Ep 2 (Mutsu-kabe), Ep 5 (Millionaire).
        // Let's map somewhat arbitrarily if visuals don't perfectly match, but:
        // rohan_confessional.jpg (Image 1) -> Definitively Top 1 "At a Confessional".
        // rohan_pose.png (Image 2) -> Maybe "Millionaire Village" or "Mutsu-kabe".
        // rohan_run.jpg (Image 0) -> "The Run".

        // User provided 3 links. 
        // Link 1: ...60920103/?r=wd
        // Link 2: ...15dee2ffa/?r=wd
        // Link 3: ...60386dbd/?r=wd

        // Let's go with the Summary Table's first 3 rows as the content source.
        title: 'Эпизод 16: Исповедальня',
        poster: rohanConfessional, // Using the one that looks like confessional
        info: {
            genre: 'Мистика, Триллер, Аниме',
            director: 'Тошиюки Като',
            cast: 'Рохан Кисибэ, Призрак',
            country: 'Япония',
            premiere: '7 июля 1997'
        },
        description: 'Рохан после основных событий манги Diamond Is Unbreakable отправился в поисках новых впечатлений в Венецию. Он решает посидеть в каморке для молитвы местного храма, но в каморку также входит местный и, думая, что Рохан — священник, решает ему исповедаться: он рассказывает, как в молодости отказал умирающему бомжу в еде и даже заставил работать до смерти. Его дух возжелал мести и пообещал разрушить жизнь незнакомца...',
        videoThumbnail: rohanConfessional,
        videoUrl: 'https://rutube.ru/video/7627aabde1d8a9a1adea654d60920103/?r=wd'
    },
    {
        id: 2,
        slug: 'mutsu-kabe',
        title: 'Эпизод 2: Холм Муцукабэ',
        poster: rohanPose, // Using the pose one
        info: {
            genre: 'Ужасы, Мистика',
            director: 'Тошиюки Като',
            cast: 'Рохан Кисибэ, Минори Кагамори',
            country: 'Япония',
            premiere: 'январь 2008'
        },
        description: 'Рохан Кисибэ разорился после того, как купил горы, на которых хотели строить автомагистраль, после чего цена на землю упала. Он рассказывает молодому мангаке Кагамору Минори легенду о том, как студентка по имени Наоко из богатого клана должна была выйти замуж по договорённости, но тайно встречалась со своим любовником Гумпэем. Во время одной из их встреч девушка нечаянно убила любовника и спрятала его тело, из которого постоянно текла кровь.',
        videoThumbnail: rohanPose,
        videoUrl: 'https://rutube.ru/video/a42c68fa583a7f8b9d56d9215dee2ffa/?r=wd'
    },
    {
        id: 3,
        slug: 'millionaire',
        title: 'Эпизод 5: Деревня миллионеров',
        poster: rohanRun, // Using the run one (even if it matches "The Run" better, we need 3 items and user gave 3 links + summary). The visual mismatch is acceptable if user provided these specific assets.
        info: {
            genre: 'Детектив, Психология',
            director: 'Тошиюки Като',
            cast: 'Рохан Кисибэ, Кёка Идзуми',
            country: 'Япония',
            premiere: '22 ноября 2012'
        },
        description: 'Кёка Идзуми, редактор журнала, предлагает Рохану купить особняк в таинственной и изолированной деревне миллионеров посреди гор всего за 3 миллиона иен. Важным условием для покупки там участка является строгое соблюдение правил этикета. Однако герои не подозревают, что бог Горы, защищающий деревню, забирает что-то важное за нарушение одного правила этикета. Так, Кёка, нарушив этикет три раза, теряет жениха и мать.',
        videoThumbnail: rohanRun,
        videoUrl: 'https://rutube.ru/video/1a9725671fe81edf6730b65e60386dbd/?r=wd'
    }
];
