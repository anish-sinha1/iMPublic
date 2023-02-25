import { IServerOrchestration, ServerOperation, ServerOrchestration } from "@orcha/nestjs";
import { Comment, CreateCommentDto, HideCommentDto, ICommentOrchestration, InvolvemintOrchestrations, UnhideCommentDto } from '@involvemint/shared/domain';
import { CommentService } from "@involvemint/server/core/application-services";
import { IQuery } from '@orcha/common';


@ServerOrchestration(InvolvemintOrchestrations.comment)
export class CommentOrchestration implements IServerOrchestration<ICommentOrchestration> {
    constructor(private readonly commentService: CommentService) {}

    @ServerOperation()
    list(query: IQuery<Comment[]>, token: string) {
        return this.commentService.list(query, token);
    }

    @ServerOperation()
    create(query: IQuery<Comment>, token: string, dto: CreateCommentDto) {
        return this.commentService.create(query, token, dto);
    }

    @ServerOperation()
    hide(query: IQuery<Comment>, token: string, dto: HideCommentDto) {
        return this.commentService.hide(query, token, dto);
    }

    @ServerOperation()
    unhide(query: IQuery<Comment>, token: string, dto: UnhideCommentDto) {
        return this.commentService.unhide(query, token, dto);
    }

}
