import React, { Component } from 'react';
import ChapterItem from './ChapterItem';
import './style.scss';

class ChapterList extends Component {

    render(){
        const {chapters} = this.props;

        return (
            <div className="chapter-list">
                {(chapters?.length) <= 0
                    ? <p className="text-centered">Aucun Chapitre</p>
                    : chapters.map(
                        (chapter) => (
                            <ChapterItem key={chapter.id} chapter={chapter}/>
                        )
                    )
                }
            </div>
        )
    }
}

export default ChapterList;