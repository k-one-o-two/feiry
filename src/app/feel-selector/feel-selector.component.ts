import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feeling } from '../interfaces';

@Component({
  selector: 'f-selector',
  templateUrl: './feel-selector.component.html',
  styleUrls: ['./feel-selector.component.scss']
})

export class FeelingSelectorComponent {
  public feelingsList: Feeling[] = [];
  private typedFeelings = {
    rage: [
      'Бешенство',
      'Ярость',
      'Ненависть',
      'Истерия',
      'Злость',
      'Раздражение',
      'Презрение',
      'Негодование',
      'Обида',
      'Ревность',
      'Уязвлённость',
      'Досада',
      'Зависть',
      'Неприязнь',
      'Возмущение',
      'Отвращение',
    ],
    fear: [
      'Ужас',
      'Отчаяние',
      'Испуг',
      'Оцепенение',
      'Подозрение',
      'Тревога',
      'Ошарашенность',
      'Беспокойство',
      'Боязнь',
      'Унижение',
      'Замешательство',
      'Растерянность',
      'Вина, стыд',
      'Сомнение',
      'Застенчивость',
      'Опасение',
      'Смущение',
      'Сломленность',
      'Подвох',
      'Надменность',
      'Ошеломлённость',
    ],
    love: [
      'Нежность',
      'Теплота',
      'Сочувствие',
      'Блаженство',
      'Доверие',
      'Безопасность',
      'Благодарность',
      'Спокойствие',
      'Симпатия',
      'Идентичность',
      'Гордость',
      'Восхищение',
      'Уважение',
      'Самоценность',
      'Влюблённость',
      'Любовь к себе',
      'Очарованность',
      'Смирение',
      'Искренность',
      'Дружелюбие',
      'Доброта',
      'Взаимовыручка',
    ],
    sadness: [
      'Горечь',
      'Тоска',
      'Скорбь',
      'Лень',
      'Жалость',
      'Отрешённость',
      'Отчаяние',
      'Беспомощность',
      'Душевная боль',
      'Безнадёжность',
      'Отчуждённость',
      'Разочарование',
      'Потрясение',
      'Сожаление',
      'Скука',
      'Безысходность',
      'Печаль',
      'Загнанность',
    ],
    joy: [
      'Счастье',
      'Восторг',
      'Ликование',
      'Приподнятость',
      'Оживление',
      'Умиротворение',
      'Увлечение',
      'Интерес',
      'Забота',
      'Ожидание',
      'Возбуждение',
      'Предвкушение',
      'Надежда',
      'Любопытство',
      'Освобождение',
      'Принятие',
      'Нетерпение',
      'Вера',
      'Изумление',
    ]
  };
  private baseColors = {
    rage: '#E5D1C0',
    fear: '#4F3CC9',
    love: '#F582AE',
    sadness: '#77E0B5',
    joy: '#B47AFE',
  };

  constructor(private activatedRoute: ActivatedRoute) {
    // this.feelingsList = this.rageFeelings;
    const feelType: string = this.activatedRoute.snapshot.routeConfig.path;
    console.info(this.activatedRoute.snapshot.routeConfig.path);

    this.feelingsList = this.parseList(feelType);
    console.info(this.feelingsList);
  }

  private parseList(feelType: string): Feeling[] {
    const result: Feeling[] = [];
    this.typedFeelings[feelType].forEach((listItem: string, n) => {
      result.push({
        name: listItem,
        color: this.createColor(this.baseColors[feelType], n)
      });
    });

    return result;
  }

  private createColor(baseColor, n): string {
    const rgb = baseColor.replace('#', '').match(/.{1,2}/g);

    let r = parseInt(rgb[0], 16);
    let g = parseInt(rgb[1], 16);
    let b = parseInt(rgb[2], 16);

    r -= n * 5;
    g -= n * 5;
    b -= n * 5;

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }
}
