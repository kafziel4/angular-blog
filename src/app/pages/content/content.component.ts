import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';
  pictureCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find((article) => article.id === id);

    if (result) {
      this.pictureCover = result.picture;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    } else {
      this.pictureCover =
        'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg';
      this.contentTitle = 'NOT FOUND';
      this.contentDescription = 'A notícia solicitada não foi encontrada.';
    }
  }
}
