import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PhotoComment } from "../../photo/photo-comment";
import { Input } from "@angular/core";
import { PhotoService } from "../../photo/photo.service";

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;

    comments$: Observable<PhotoComment[]>;

    constructor(private photoService: PhotoService) {}

    ngOnInit(): void {

        this.comments$ = this.photoService.getComments(this.photoId);
    }
}