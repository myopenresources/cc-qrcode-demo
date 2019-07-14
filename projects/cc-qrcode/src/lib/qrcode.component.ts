import { Component, OnInit, Input, ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

import QRious from 'qrious';

/**
 * 二维码
 */
@Component({
  selector: 'cc-qrcode',
  template: ``
})
export class QrcodeComponent implements OnChanges, OnDestroy {

  @Input()
  value = '';

  @Input()
  background = 'white';

  @Input()
  foreground = 'black';

  @Input()
  backgroundAlpha = 1.0;

  @Input()
  foregroundAlpha = 1.0;

  @Input()
  level = 'L';

  @Input()
  mime = 'image/png';

  @Input()
  padding = 0;

  @Input()
  size = 100;

  @Input()
  canvas = false;

  qr: QRious;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.background || changes.backgroundAlpha || changes.foreground || changes.foregroundAlpha ||
      changes.level || changes.mime || changes.padding || changes.size || changes.value || changes.canvas) {
      this.qrcodedBuild();
    }
  }

  qrcodedBuild(): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.innerHTML = '';
    this.qr = new QRious({
      background: this.background,
      backgroundAlpha: this.backgroundAlpha,
      foreground: this.foreground,
      foregroundAlpha: this.foregroundAlpha,
      level: this.level,
      mime: this.mime,
      padding: this.padding,
      size: this.size,
      value: this.value
    });

    if (this.canvas) {
      element.appendChild(this.qr.canvas);
    } else {
      element.appendChild(this.qr.image);
    }
  }

  toDataURL(): string {
    return this.qr.toDataURL();
  }


  ngOnDestroy() {
    this.qr = null;
  }

}
