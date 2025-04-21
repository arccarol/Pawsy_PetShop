import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule
  ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  cards = [
    {
      title: 'Banho e Tosa',
      description: 'Serviço completo de higiene, hidratação e tosa para deixar seu pet limpinho e feliz.',
      grafico: './assets/cardBanho.png'
    },
    {
      title: 'Rações e Acessórios',
      description: 'Disponibilizamos uma vasta gama de rações de qualidade e acessórios para cães, gatos e outros pets.',
      grafico: './assets/cardRacao.png'
    },
    {
      title: 'Higiene Bucal',
      description: 'Cuide da saúde bucal do seu pet com nossos serviços odontológicos. Realizamos limpeza dentária, extração de dentes.',
      grafico: './assets/cardDente.png'
    },
    {
      title: 'Consulta Comportamental',
      description: 'Atendimento com especialista para corrigir comportamentos indesejados e melhorar a convivência.',
      grafico: './assets/cardComportamental.png'
    }
  ];

  @ViewChild('carouselWindow') carouselWindow!: ElementRef;
  @ViewChildren('cardItem') cardItems!: QueryList<ElementRef>;

  currentIndex = 0;
  translateX = 0;
  cardWidth = 0;
  maxIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const firstCard = this.cardItems.first.nativeElement as HTMLElement;
    this.cardWidth = firstCard.offsetWidth + 20;

    this.maxIndex = this.cards.length - 2;

    this.cdr.detectChanges(); // evita erro NG0100
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.updateTranslateX();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTranslateX();
    }
  }

  updateTranslateX() {
    this.translateX = this.currentIndex * this.cardWidth;
  }

  // Getter para visibilidade segura no template
  get isNextVisible(): boolean {
    return this.currentIndex < this.maxIndex;
  }

  get isPrevVisible(): boolean {
    return this.currentIndex > 0;
  }

touchStartX: number = 0;
touchEndX: number = 0;

onTouchStart(event: TouchEvent): void {
  this.touchStartX = event.changedTouches[0].screenX;
}

onTouchMove(event: TouchEvent): void {
  this.touchEndX = event.changedTouches[0].screenX;
}

onTouchEnd(): void {
  const swipeThreshold = 50;
  if (this.touchEndX < this.touchStartX - swipeThreshold) {
    this.nextSlide();
  } else if (this.touchEndX > this.touchStartX + swipeThreshold) {
    this.prevSlide();
  }
}

 

}